const resizeIcon = require('./src/utils/resizeIcon')
const resize_drawable = require('./src/resize_drawable')
const resize_mipmap = require('./src/resize_mipmap')

function testNpm() {
  resize_drawable('./files/output');
  resize_mipmap('./files/output');
}
testNpm()

module.exports = resizeIcon
module.exports = resize_drawable
module.exports = resize_mipmap