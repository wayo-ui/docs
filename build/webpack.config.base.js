const Path = require('path');
const Config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry: {
    docs: `${Config.SourceDir}/js/index.js`,
    demo: `${Config.SourceDir}/js/demo.js`
  },
  output: {
    path: Config.DistDir,
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/modules/[name].[hash:8].js',
    publicPath: process.env.NODE_ENV === 'production'?'./':'/'
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.md$/,
      loader: 'raw-loader'
    }, {
      test: /\.js$/,
      include: [Config.SourceDir],
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
        name: 'assets/fonts/[name].[ext]',
        publicPath: process.env.NODE_ENV === 'production'?'../':'/'
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
      inject: true,
      chunks: ['docs']
    }),
    new HtmlWebpackPlugin({
      template: `${Config.SourceDir}/demo.ejs`,
      filename: 'demo.html',
      inject: true,
      chunks: ['demo']
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': Config.SourceDir
    }
  }
};