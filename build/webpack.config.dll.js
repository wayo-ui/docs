const Path = require('path');
const Webpack = require('webpack');
const Config = require('./config');

module.exports = {
  mode: 'production',
  entry: {
    dll: ['wayo','vue','vuex','vue-router']
  },
  output: {
    path: Config.DllDir,
    filename: '[name].js',
    library: '[name]',
    publicPath: './'
  },
  plugins: [
    new Webpack.DllPlugin({
      context: process.cwd(),
      path: `${Config.DllDir}/manifest.json`,
      name: '[name]'
    })
  ]
};