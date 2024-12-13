const resizeIcon = require('./utils/resizeIcon')
const makeFolder = require('./utils/makeFolder')

async function resize_drawable(outputDir) {
    const iconPath = '/Users/mariuszilguzis/Desktop/zxc.png';
    const drawables = [
      { folder: 'drawable', name: 'ic_logo', width: 432, height: 236 },
      { folder: 'drawable-hdpi', name: 'banner', width: 240, height: 135 },
      { folder: 'drawable-mdpi', name: 'banner', width: 160, height: 90 },
      { folder: 'drawable-xhdpi', name: 'banner', width: 320, height: 180 },
      { folder: 'drawable-xxhdpi', name: 'banner', width: 480, height: 270 },
      { folder: 'drawable-xxxhdpi', name: 'banner', width: 640, height: 360 }
    ];
  
    for (const drawable of drawables) {
      makeFolder(`${outputDir}/${drawable.folder}`);
      await resizeIcon(iconPath, `${outputDir}/${drawable.folder}`, drawable.name, drawable.width, drawable.height);
    }
  }
  

module.exports = resize_drawable