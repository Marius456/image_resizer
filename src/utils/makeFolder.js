var fs = require('fs');

function makeFolder(outputDir, folderName){
    const dir = `${outputDir}/${folderName}`
    try {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    } catch (error) {
        console.error("Error while creating a folder:", error);
    }
}

module.exports = makeFolder