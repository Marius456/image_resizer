const resizeIcon = require("./utils/resizeIcon");
const makeFolder = require("./utils/makeFolder");
const { Jimp } = require("jimp");

async function generateTizen(iconPath) {
  const basePath = "./files/output/builds/tizen";

  makeFolder(basePath);
  const image = await Jimp.read(iconPath);
  image.resize({ w: 117, h: 117 });

  await image.write(`${basePath}/icon.png`);
}

module.exports = generateTizen;