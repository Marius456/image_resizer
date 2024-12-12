const { Jimp } = require("jimp");

async function resizeIcon(filePath, outputDir, fileName, width, height){
    try {
        const image = await Jimp.read(filePath);
    
        image.resize({ w: width, h: height });
    
        await image.write(`${outputDir}/${fileName}.png`);
    } catch (error) {
        console.error("Error processing image:", error);
    }
}

module.exports = resizeIcon