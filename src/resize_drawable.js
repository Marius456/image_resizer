const resizeIcon = require('./utils/resizeIcon')
const makeFolder = require('./utils/makeFolder')

async function resize_drawable(outputDir) {
    const icon_path = './files/input/ic_logo.png';
    // drawable          432 x 236
    makeFolder(outputDir, 'drawable')
    await resizeIcon(icon_path, `${outputDir}/drawable`, 'ic_logo', 432, 236)
    // drawable-hdpi     240 x 135
    makeFolder(outputDir, 'drawable-hdpi')
    await resizeIcon(icon_path, `${outputDir}/drawable-hdpi`, 'banner', 240, 135)
    // drawable-mdpi     160 x 90
    makeFolder(outputDir, 'drawable-mdpi')
    await resizeIcon(icon_path, `${outputDir}/drawable-mdpi`, 'banner', 160, 90)
    // drawable-xhdpi    320 x 180
    makeFolder(outputDir, 'drawable-xhdpi')
    await resizeIcon(icon_path, `${outputDir}/drawable-xhdpi`, 'banner', 320, 180)
    // drawable-xxhdpi    480 x 270
    makeFolder(outputDir, 'drawable-xxhdpi')
    await resizeIcon(icon_path, `${outputDir}/drawable-xxhdpi`, 'banner', 480, 270)
    // drawable-xxxhdpi  640 x 360
    makeFolder(outputDir, 'drawable-xxxhdpi')
    await resizeIcon(icon_path, `${outputDir}/drawable-xxxhdpi`, 'banner', 640, 360)
}

module.exports = resize_drawable