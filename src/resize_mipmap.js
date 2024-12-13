const resizeIcon = require('./utils/resizeIcon')
const makeFolder = require('./utils/makeFolder')

async function resize_mipmap(outputDir) {
    const iconPath = '/Users/mariuszilguzis/Desktop/zxc.png';
    const mipmaps = [
      { folder: 'mipmap-hdpi', name: 'ic_launcher', width: 72, height: 72 },
      { folder: 'mipmap-mdpi', name: 'ic_launcher', width: 48, height: 48 },
      { folder: 'mipmap-xhdpi', name: 'ic_launcher', width: 96, height: 96 },
      { folder: 'mipmap-xxhdpi', name: 'ic_launcher', width: 144, height: 144 },
      { folder: 'mipmap-xxxhdpi', name: 'ic_launcher', width: 192, height: 192 }
    ];
  
    for (const mipmap of mipmaps) {
      makeFolder(`${outputDir}/${mipmap.folder}`);
      await resizeIcon(iconPath, `${outputDir}/${mipmap.folder}`, mipmap.name, mipmap.width, mipmap.height);
    }
  }
  

module.exports = resize_mipmap