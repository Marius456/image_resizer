const generateAndroid = require('./src/generateAndroid')
const generateAndroidtv = require('./src/generateAndroidtv')
const generateAndroidwear = require('./src/generateAndroidwear')
const generateIos = require('./src/generateIos')
const generateTvos = require('./src/generateTvos')
const generateFiretv = require('./src/generateFiretv')
const generateWebos = require('./src/generateWebos')
const generateMacos = require('./src/generateMacos')


const update_project = () => {
    generateAndroid()
    generateAndroidtv()
    generateAndroidwear()
    generateFiretv()
    generateIos()
    generateTvos()
    generateWebos()
    generateMacos()
    console.log('Updated project')
}

update_project()