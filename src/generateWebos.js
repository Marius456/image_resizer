const resizeIcon = require("./utils/resizeIcon");
const makeFolder = require("./utils/makeFolder");

async function generateWebos(basePath, iconPath) {

  makeFolder(basePath);
  resizeIcon(iconPath, basePath, "icon", 80, 80);
  resizeIcon(iconPath, basePath, "largeIcon", 130, 130);
  resizeIcon(iconPath, basePath, "splashBackground", 432, 236);
}

module.exports = generateWebos;
