const generateAndroid = require('./src/generateAndroid')
const generateAndroidtv = require('./src/generateAndroidtv')
const generateAndroidwear = require('./src/generateAndroidwear')
const generateIos = require('./src/generateIos')
const generateTvos = require('./src/generateTvos')
const generateFiretv = require('./src/generateFiretv')
const generateWebos = require('./src/generateWebos')


const update_project = () => {
    // 500 × 487
    generateAndroid()
    generateAndroidtv()
    generateAndroidwear()
    generateFiretv()
    generateIos()
    generateTvos()
    generateWebos()
    console.log('Updated project')
}

update_project()