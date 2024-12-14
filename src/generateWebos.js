const resizeIcon = require('./utils/resizeIcon')
const makeFolder = require('./utils/makeFolder')

async function generateWebos() {
    const basePath = './files/output/builds/webos';
    const iconPath = '/Users/mariuszilguzis/Desktop/zxc.png';

    makeFolder(basePath);
    resizeIcon(iconPath, basePath, 'icon', 80, 80)
    resizeIcon(iconPath, basePath, 'largeIcon', 130, 130)
    resizeIcon(iconPath, basePath, 'splashBackground', 432, 236)
  }
  

module.exports = generateWebos