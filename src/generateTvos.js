const resizeIcon = require("./utils/resizeIcon");
const makeFolder = require("./utils/makeFolder");

async function generateTvos(basePath, iconPath) {
  makeFolder(basePath);
  await resizeIcon(iconPath, basePath, "400x240", 400, 240);
  await resizeIcon(iconPath, basePath, "800x480", 800, 480);
}

module.exports = generateTvos;
