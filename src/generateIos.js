const resizeIcon = require("./utils/resizeIcon");
const makeFolder = require("./utils/makeFolder");

async function generateIos(basePath, iconPath) {
  const sizes = [
    16, 20, 29, 32, 40, 48, 50, 55, 57, 58, 60, 64, 66, 72, 76, 80, 87, 88, 92,
    100, 102, 114, 120, 128, 144, 152, 167, 172, 180, 196, 216, 256, 512, 1024,
  ];

  makeFolder(basePath);
  const resizePromises = sizes.map((size) =>
    resizeIcon(iconPath, basePath, size, size, size)
  );

  await Promise.all(resizePromises);
}

module.exports = generateIos;
