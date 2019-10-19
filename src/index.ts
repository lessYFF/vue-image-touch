import imageTouch from './image-touch.vue';
interface Props {
    imageList: Array<any>; // 图片数据源
    activedIndex?: number; // 进度下标
    isShowBar?: boolean;   // 是否显示进度
    bgColor?: string;      // 蒙层背景
    transition?: string;   // 过渡动画
}

const ImageTouch = {
    install(Vue, options) {
        const imageTouchContructor = Vue.extend(imageTouch);
        let imageTouchInstance:any;

        const initInstance = () => {
            imageTouchInstance = new imageTouchContructor();
            console.log('imageTouchInstance', imageTouchInstance);
            const dom = imageTouchInstance.$mount().$el;
            document.body.appendChild(dom) // 将dom插入body
        }

        Vue.prototype.$imageTouch = (args: Props) => {
            if (!imageTouchInstance) {
                initInstance();
            }
            if (typeof args === 'object') {
                Object.assign(imageTouchInstance, args);
            }

            return imageTouchInstance.show();
        };
    }
};

export default ImageTouch;
