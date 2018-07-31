const Path = require('path');
const Webpack = require('webpack');
const Merge = require('webpack-merge');
const BasicWebpackConfig = require('./webpack.config.base.js');
const Config = require('./config');

module.exports = Merge(BasicWebpackConfig, {
  devtool: '#source-map',
  mode: 'development',
  devServer: {
    hot: true,
    port: 8888,
    host: '0.0.0.0',
    inline: true,
    clientLogLevel: 'error',
    index: 'index.html'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader', 
        'css-loader', 
        'sass-loader'
      ]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: [
            'vue-style-loader', {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            }
          ],
          scss: [
            'vue-style-loader', {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }
          ]
        },
        postLoaders: {
          html: 'babel-loader?sourceMap'
        },
        sourceMap: true,
      }
    }]
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  ]
});