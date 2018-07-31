const Path = require('path');
const Marked = require("marked");
const Config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const Renderer = new Marked.Renderer();

module.exports = {
  entry: {
    doc: `${Config.SourceDir}/js/index.js`
  },
  output: {
    path: Config.DistDir,
    filename: 'js/[name].[hash:8].js',
    publicPath: '/'
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.md$/,
      loader: 'raw-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        name: 'assets/[name].[hash:8].[ext]'
      }
    }, {
      test: /fonts\/\w+\.(svg|ttf|woff)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[ext]'
      }
    }, {
      test: /\.ejs$/,
      use: [
        'html-loader', {
          loader: 'ejs-html-loader',
          options: {
            context: {
              dll: process.env.NODE_ENV === 'production'
            }
          }
        }
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: `${Config.SourceDir}/index.ejs`,
      filename: 'index.html',
      inject: true
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': Config.SourceDir,
      'vue': 'vue/dist/vue.esm.js'
    }
  }
};