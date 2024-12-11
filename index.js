const resizeLaunchIcons = require('./src/resizeLaunchIcons')

function helloNpm() {
  resizeLaunchIcons('./files/input/ic_logo.png', './files/output');
  // resizeLaunchIcons('./files/input/ic_launcher.png', './files/output');
  return "hello NPM"
}
helloNpm()
// module.exports = helloNpm