const Path = require('path');
const Webpack = require('webpack');
const Merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Config = require('./config');
const BasicWebpackConfig = require('./webpack.config.base.js');

module.exports = Merge.smart(BasicWebpackConfig, {
  devtool: false,
  mode: 'production',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }, 
      'sass-loader']
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
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new Webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(`${Config.DllDir}/manifest.json`)
    }),
    new CleanWebpackPlugin(Config.DistDir, {
      root: Config.RootDir
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash:8].css',
      chunkFilename: 'styles/modules/[name].[hash:8].css'
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    }),
    new CopyWebpackPlugin([{
      from: `${Config.DllDir}/docs.dll.js`,
      to: `${Config.DistDir}/js/docs.dll.js`,
      ignore: ['.*']
    }]),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false
    }),
    new Webpack.HashedModuleIdsPlugin(),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  ]
});