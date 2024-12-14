const generateAndroid = require('./src/generateAndroid')
const generateAndroidtv = require('./src/generateAndroidtv')
const generateAndroidwear = require('./src/generateAndroidwear')
const generateIos = require('./src/generateIos')
const generateTvos = require('./src/generateTvos')
const generateFiretv = require('./src/generateFiretv')
const generateWebos = require('./src/generateWebos')
const generateMacos = require('./src/generateMacos')
const generateWindows = require('./src/generateWindows')


const update_project = () => {
    // web
    // linux
    generateAndroid()
    generateAndroidtv()
    generateAndroidwear()
    generateFiretv()
    generateIos()
    generateTvos()
    generateWebos()
    generateMacos()
    generateWindows()
    console.log('Updated project')
}

update_project()