const generateAndroid = require('./src/generateAndroid')
const generateAndroidtv = require('./src/generateAndroidtv')
const generateIos = require('./src/generateIos')
const generateTvos = require('./src/generateTvos')
const generateFiretv = require('./src/generateFiretv')


const update_project = () => {
    // 500 × 487
    generateAndroid()
    generateAndroidtv()
    generateIos()
    generateTvos()
    generateFiretv()
    console.log('Updated project')
}

update_project()