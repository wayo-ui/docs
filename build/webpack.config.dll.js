const Path = require('path');
const Webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Config = require('./config');

module.exports = {
  mode: 'production',
  entry: {
    docs: ['wayo', 'vue', 'vuex', 'vue-router']
  },
  output: {
    path: Config.DllDir,
    filename: '[name].dll.js',
    library: '[name]_libs'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(Config.DllDir, {
      root: Config.RootDir
    }),
    new Webpack.DllPlugin({
      context: process.cwd(),
      path: `${Config.DllDir}/manifest.json`,
      name: '[name]_libs'
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false
    })
  ]
};