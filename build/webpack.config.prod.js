const Path = require('path');
const Webpack = require('webpack');
const Merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Config = require('./config');
const BasicWebpackConfig = require('./webpack.config.base.js');

module.exports = Merge(BasicWebpackConfig,{
  devtool: false,
  mode: 'production',
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true
          }
        },'sass-loader']
      })
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: [
            'vue-style-loader',
            'css-loader'
          ],
          scss: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        postLoaders: {
          html: 'babel-loader'
        }
      }
    }]
  },
  externals: {
    vue: {
      commonjs: 'vue'
    },
    'vue-router': {
      commonjs: 'vue-router'
    },
    vuex: {
      commonjs: 'vuex'
    },
    wayo: {
      commonjs: 'wayo'
    }
  },
  plugins: [
    new Webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: `${Config.DllDir}/manifest.json`
    }),
    new CleanWebpackPlugin(Config.DistDir,{
      root: Config.RootDir
    }),
    new ExtractTextPlugin("styles/doc.min.css"),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    }),
    new CopyWebpackPlugin([{
      from: `${Config.DllDir}/dll.js`,
      to: `${Config.DistDir}/js/dll.js`,
      ignore: ['.*']
    }]),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true
    }),
    new Webpack.HashedModuleIdsPlugin(),
    new Webpack.optimize.ModuleConcatenationPlugin()
  ]
});