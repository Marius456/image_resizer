const iconGenerate = require('./iconGenerate')

async function resizeLaunchIcons(launchIcon, outputDir) {

    // drawable          432 x 236
    iconGenerate(launchIcon, outputDir, 432, 236)
    // drawable-hdpi     240 x 135
    iconGenerate(launchIcon, outputDir, 240, 135)
    // drawable-mdpi     160 x 90
    iconGenerate(launchIcon, outputDir, 160, 90)
    // drawable-xhdpi    320 x 180
    iconGenerate(launchIcon, outputDir, 320, 180)
    // drawable-xxhdpi   480 x 270
    iconGenerate(launchIcon, outputDir, 480, 270)
    // drawable-xxxhdpi  640 x 360
    iconGenerate(launchIcon, outputDir, 640, 360)
    // // mipmap-hdpi     72 x 72
    // iconGenerate(launchIcon, outputDir, 72, 72)
    // // mipmap-mdpi     48 x 48
    // iconGenerate(launchIcon, outputDir, 48, 48)
    // // mipmap-xhdpi    96 x 96
    // iconGenerate(launchIcon, outputDir, 96, 96)
    // // mipmap-xxhdpi   144 x 144
    // iconGenerate(launchIcon, outputDir, 144, 144)
    // // mipmap-xxxhdpi  192 x 192
    // iconGenerate(launchIcon, outputDir, 192, 192)
}

module.exports = resizeLaunchIcons