const resizeIcon = require("./utils/resizeIcon");
const makeFolder = require("./utils/makeFolder");
const { Jimp } = require("jimp");

async function generateMacos(basePath, iconPath) {
  makeFolder(basePath);
  const image = await Jimp.read(iconPath);
  image.resize({ w: 512, h: 512 });

  const width = 512;
  const height = 512;
  const radius = Math.min(width, height) / 5;

  const mask = new Jimp({ width: width, height: height, color: "black" });
  await mask.scan(0, 0, width, height, function (x, y, idx) {
    const dx =
      x < radius ? radius - x : x > width - radius ? x - (width - radius) : 0;
    const dy =
      y < radius ? radius - y : y > height - radius ? y - (height - radius) : 0;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius) {
      this.bitmap.data.set([255, 255, 255], idx);
    }
  });

  image.mask(mask);
  await image.write(`${basePath}/icon.png`);
}

module.exports = generateMacos;
