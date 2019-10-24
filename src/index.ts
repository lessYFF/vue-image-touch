import imageTouch from './image-touch.vue'
import { Props } from '../types'

const ImageTouch = {
    install(Vue, options) {
        const imageTouchContructor = Vue.extend(imageTouch)
        let imageTouchInstance: any

        const initInstance = () => {
            imageTouchInstance = new imageTouchContructor()

            const dom = imageTouchInstance.$mount().$el
            document.body.appendChild(dom) // 将dom插入body
        }

        Vue.prototype.$imageTouch = (args: Props) => {
            if (!imageTouchInstance) {
                initInstance()
            }
            if (typeof args === 'object') {
                Object.assign(imageTouchInstance, args)
            }

            return imageTouchInstance.show()
        }
    },
}

export default ImageTouch
