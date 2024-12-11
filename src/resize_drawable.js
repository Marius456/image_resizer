const resizeIcon = require('./utils/resizeIcon')

async function resize_drawable(outputDir) {
    const icon_path = './files/input/ic_logo.png';
    // drawable          432 x 236
    resizeIcon(icon_path, outputDir, 432, 236)
    // drawable-hdpi     240 x 135
    resizeIcon(icon_path, outputDir, 240, 135)
    // drawable-mdpi     160 x 90
    resizeIcon(icon_path, outputDir, 160, 90)
    // drawable-xhdpi    320 x 180
    resizeIcon(icon_path, outputDir, 320, 180)
    // drawable-xxhdpi   480 x 270
    resizeIcon(icon_path, outputDir, 480, 270)
    // drawable-xxxhdpi  640 x 360
    resizeIcon(icon_path, outputDir, 640, 360)
}

module.exports = resize_drawable