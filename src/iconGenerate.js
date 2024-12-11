const { Jimp } = require("jimp");

async function iconGenerate(filePath, outputDir, width, height){
    try {
        const image = await Jimp.read(filePath);
    
        image.resize({ w: width, h: height });
    
        await image.write(`${outputDir}/resized_${width}_${height}.png`);
    } catch (error) {
        console.error("Error processing image:", error);
    }
}

module.exports = iconGenerate