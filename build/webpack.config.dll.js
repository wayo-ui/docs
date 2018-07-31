const Path = require('path');
const Webpack = require('webpack');
const Config = require('./config');

module.exports = {
  mode: 'production',
  entry: {
    dll: ['wayo','vue']
  },
  output: {
    path: Config.DllDir,
    filename: '[name].js',
    library: '[name]',
    publicPath: './'
  },
  plugins: [
    new Webpack.DllPlugin({
      path: `${Config.DllDir}/manifest.json`,
      name: '[name]'
    })
  ]
};