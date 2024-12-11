const resizeIcon = require('./utils/resizeIcon')
const makeFolder = require('./utils/makeFolder')

async function resize_mipmap(outputDir) {
    const icon_path = './files/input/ic_launcher.png';
    // mipmap-hdpi     72 x 72
    makeFolder(outputDir, 'mipmap-hdpi')
    await resizeIcon(icon_path, `${outputDir}/mipmap-hdpi`, 'ic_launcher', 72, 72)
    // mipmap-mdpi     48 x 48
    makeFolder(outputDir, 'mipmap-mdpi')
    await resizeIcon(icon_path, `${outputDir}/mipmap-mdpi`, 'ic_launcher', 48, 48)
    // mipmap-xhdpi    96 x 96
    makeFolder(outputDir, 'mipmap-xhdpi')
    await resizeIcon(icon_path, `${outputDir}/mipmap-xhdpi`, 'ic_launcher', 96, 96)
    // mipmap-xxhdpi   144 x 144
    makeFolder(outputDir, 'mipmap-xxhdpi')
    await resizeIcon(icon_path, `${outputDir}/mipmap-xxhdpi`, 'ic_launcher', 144, 144)
    // mipmap-xxxhdpi  192 x 192
    makeFolder(outputDir, 'mipmap-xxxhdpi')
    await resizeIcon(icon_path, `${outputDir}/mipmap-xxxhdpi`, 'ic_launcher', 192, 192)
}

module.exports = resize_mipmap