const resize_drawable = require('./resize_drawable')
const resize_mipmap = require('./resize_mipmap')
const makeFolder = require('./utils/makeFolder')

function generateAndroid() {
    const basePath = './files/output/builds/android/app/src/main/res';

    makeFolder(basePath);
    resize_drawable(basePath);
    resize_mipmap(basePath);
}


module.exports = generateAndroid