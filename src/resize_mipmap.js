const resizeIcon = require('./utils/resizeIcon')

async function resize_mipmap(outputDir) {
    const icon_path = './files/input/ic_launcher.png';
    // mipmap-hdpi     72 x 72
    resizeIcon(icon_path, outputDir, 72, 72)
    // mipmap-mdpi     48 x 48
    resizeIcon(icon_path, outputDir, 48, 48)
    // mipmap-xhdpi    96 x 96
    resizeIcon(icon_path, outputDir, 96, 96)
    // mipmap-xxhdpi   144 x 144
    resizeIcon(icon_path, outputDir, 144, 144)
    // mipmap-xxxhdpi  192 x 192
    resizeIcon(icon_path, outputDir, 192, 192)
}

module.exports = resize_mipmap