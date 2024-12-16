const generateAndroid = require("./src/generateAndroid");
const generateIos = require("./src/generateIos");
const generateTvos = require("./src/generateTvos");
const generateWebos = require("./src/generateWebos");
const generateMacos = require("./src/generateMacos");
const generateWindows = require("./src/generateWindows");
const generateTizen = require("./src/generateTizen");
const makeFolder = require("./src/utils/makeFolder");
const resizeIcon = require("./src/utils/resizeIcon");
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function askQuestion(query) { return new Promise(resolve => rl.question(query, resolve)); }

const update_project = async () => {
  const folderPath = await askQuestion("Please enter path to renative project appConfigs folder:"); 
  const imgPath = await askQuestion("Please enter path to the picture:"); 
  rl.close();

  // web
  // linux
  makeFolder(`${folderPath}/base/assets/runtime`);
  resizeIcon(imgPath, `${folderPath}/base/assets/runtime`, 'logo', 500, 487);


  generateAndroid(`${folderPath}/base/builds/android/app/src/main/res`, imgPath);
  generateAndroid(`${folderPath}/base/builds/androidtv/app/src/main/res`, imgPath);
  generateAndroid(`${folderPath}/base/builds/androidwear/app/src/main/res`, imgPath);
  generateAndroid(`${folderPath}/base/builds/firetv/app/src/main/res`, imgPath);
  generateIos(`${folderPath}/base/builds/builds/ios/RNVApp/Assets.xcassets/AppIcon.appiconset`, imgPath);
  generateTvos(`${folderPath}/base/builds/builds/tvos/RNVApp/Images.xcassets/App Icon & Top Shelf Image.brandassets/App Icon.imagestack/Front.imagestacklayer/Content.imageset`, imgPath);
  generateWebos(`${folderPath}/base/builds/builds/webos`, imgPath);
  generateMacos(`${folderPath}/base/builds/builds/macos/resources`, imgPath);
  generateWindows(`${folderPath}/base/builds/builds/windows/resources`, imgPath);
  generateTizen(`${folderPath}/base/builds/builds/tizen`, imgPath);
  console.log("Updated project");
};

update_project();
