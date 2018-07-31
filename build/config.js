const Path = require('path');

const SourceDir = Path.resolve(__dirname,'../src');
const DistDir = Path.join(__dirname,'../dist');
const DllDir = Path.join(__dirname,'../dll');
const RootDir = Path.join(__dirname,'../');

module.exports = {
  SourceDir,
  DistDir,
  DllDir,
  RootDir
};