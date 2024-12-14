const resizeIcon = require('./utils/resizeIcon')
const makeFolder = require('./utils/makeFolder')
const { Jimp } = require("jimp");

async function generateTizen() {
    const basePath = './files/output/builds/tizen';
    const iconPath = '/Users/mariuszilguzis/Desktop/zxc.png';

    makeFolder(basePath);
    const image = await Jimp.read(iconPath);
    image.resize({ w: 117, h: 117 });

    await image.write(`${basePath}/icon.png`);

  }
  

module.exports = generateTizen