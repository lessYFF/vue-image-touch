export interface Props {
    imageList: Array<any> // 图片数据源
    activedIndex?: number // 进度下标
    isShowBar?: boolean // 是否显示进度
    bgColor?: string // 蒙层背景
    transition?: string // 过渡动画
}

declare module 'vue/types/vue' {
    interface Vue {
        $imageTouch: any
    }
}
