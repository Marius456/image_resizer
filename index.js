const resizeIcon = require('./src/utils/resizeIcon')
const resize_drawable = require('./src/resize_drawable')
const resize_mipmap = require('./src/resize_mipmap')
const resize_appiconset = require('./src/resize_appiconset')

function testNpm() {
  // android assets
  resize_drawable('./files/output');
  resize_mipmap('./files/output');
  // ios assets
  resize_appiconset('./files/output');
}
// testNpm()

module.exports = resizeIcon
module.exports = resize_drawable
module.exports = resize_mipmap
module.exports = resize_appiconset