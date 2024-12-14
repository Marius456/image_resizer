const generateAndroid = require('./src/generateAndroid')
const generateAndroidtv = require('./src/generateAndroidtv')


const update_project = () => {
    // 500 × 487
    generateAndroid()
    generateAndroidtv()
    console.log('Updated project')
}

update_project()