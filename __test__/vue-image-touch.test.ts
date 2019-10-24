const imageTouch = require('../lib/index.js')

console.log('imageTouch', imageTouch)
describe('Vue Plugin', () => {
    test('is a Vue plugin', () => {
        expect('install' in imageTouch).toBeTruthy()
    })
})
