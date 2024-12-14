const resizeIcon = require('./utils/resizeIcon')
const makeFolder = require('./utils/makeFolder')

async function generateTvos() {
    const basePath = './files/output/builds/tvos/RNVApp/Images.xcassets/App Icon & Top Shelf Image.brandassets/App Icon.imagestack/Front.imagestacklayer/Content.imageset';
    const iconPath = '/Users/mariuszilguzis/Desktop/zxc.png';
  
    makeFolder(basePath);
    await resizeIcon(iconPath, basePath, '400x240', 400, 240)
    await resizeIcon(iconPath, basePath, '800x480', 800, 480)
  }
  

module.exports = generateTvos