import { mount } from '@vue/test-utils'
import imageTouch from '../src/image-touch.vue'

describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(imageTouch)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
