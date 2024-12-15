const makeFolder = require("./utils/makeFolder");
const resizeIcon = require("./utils/resizeIcon");

async function resize_drawable(outputDir, iconPath) {
  const drawables = [
    { folder: "drawable", name: "ic_logo", width: 432, height: 236 },
    { folder: "drawable-hdpi", name: "banner", width: 240, height: 135 },
    { folder: "drawable-mdpi", name: "banner", width: 160, height: 90 },
    { folder: "drawable-xhdpi", name: "banner", width: 320, height: 180 },
    { folder: "drawable-xxhdpi", name: "banner", width: 480, height: 270 },
    { folder: "drawable-xxxhdpi", name: "banner", width: 640, height: 360 },
  ];

  for (const drawable of drawables) {
    makeFolder(`${outputDir}/${drawable.folder}`);
    await resizeIcon(
      iconPath,
      `${outputDir}/${drawable.folder}`,
      drawable.name,
      drawable.width,
      drawable.height
    );
  }
}

async function resize_mipmap(outputDir, iconPath) {
  const mipmaps = [
    { folder: "mipmap-hdpi", name: "ic_launcher", width: 72, height: 72 },
    { folder: "mipmap-mdpi", name: "ic_launcher", width: 48, height: 48 },
    { folder: "mipmap-xhdpi", name: "ic_launcher", width: 96, height: 96 },
    { folder: "mipmap-xxhdpi", name: "ic_launcher", width: 144, height: 144 },
    { folder: "mipmap-xxxhdpi", name: "ic_launcher", width: 192, height: 192 },
  ];

  for (const mipmap of mipmaps) {
    makeFolder(`${outputDir}/${mipmap.folder}`);
    await resizeIcon(
      iconPath,
      `${outputDir}/${mipmap.folder}`,
      mipmap.name,
      mipmap.width,
      mipmap.height
    );
  }
}
function generateAndroid(basePath, iconPath) {
  makeFolder(basePath);
  resize_drawable(basePath, iconPath);
  resize_mipmap(basePath, iconPath);
}

module.exports = generateAndroid;
