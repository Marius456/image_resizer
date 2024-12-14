const resize_drawable = require('./components/resize_drawable')
const resize_mipmap = require('./components/resize_mipmap')
const makeFolder = require('./utils/makeFolder')

function generateAndroidwear() {
    const basePath = './files/output/builds/androidwear/app/src/main/res';

    makeFolder(basePath);
    resize_drawable(basePath);
    resize_mipmap(basePath);
}


module.exports = generateAndroidwear