const generateAndroid = require("./src/generateAndroid");
const generateIos = require("./src/generateIos");
const generateTvos = require("./src/generateTvos");
const generateWebos = require("./src/generateWebos");
const generateMacos = require("./src/generateMacos");
const generateWindows = require("./src/generateWindows");
const generateTizen = require("./src/generateTizen");

const update_project = () => {
  const icon = "logo.png";
  // web
  // linux
  generateAndroid("./files/output/builds/android/app/src/main/res", icon);
  generateAndroid("./files/output/builds/androidtv/app/src/main/res", icon);
  generateAndroid("./files/output/builds/androidwear/app/src/main/res", icon);
  generateAndroid("./files/output/builds/firetv/app/src/main/res", icon);
  generateIos(icon);
  generateTvos(icon);
  generateWebos(icon);
  generateMacos(icon);
  generateWindows(icon);
  generateTizen(icon);
  console.log("Updated project");
};

update_project();
