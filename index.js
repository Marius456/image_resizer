const resizeIcon = require('./src/utils/resizeIcon')
const resize_appiconset = require('./src/resize_appiconset')
const generateAndroid = require('./src/generateAndroid')


const update_project = () => {
    // 500 × 487
    generateAndroid()
    console.log('Updated project')
}

update_project()