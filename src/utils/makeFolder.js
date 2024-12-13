const fs = require('fs');

function makeFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Directory created: ${folderPath}`);
    } else {
        console.log(`Directory already exists: ${folderPath}`);
    }
}



module.exports = makeFolder