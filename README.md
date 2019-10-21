# vue-image-touch

> plugin of vue for touch image

## Install

```bash
    npm install vue-image-touch@latest
    or
    yarn add vue-image-touch@latest
```

## Usage

```bash
    import VueImageTouch form 'vue-image-touch';
    interface Props {
        imageList: Array<any>; // 图片数据源
        activedIndex?: number; // 进度下标
        isShowBar?: boolean;   // 是否显示进度
        bgColor?: string;      // 蒙层背景
        transition?: string;   // 过渡动画
    }
    Vue.use(VueImageTouch);

    this.$imageTouch(args: Props);
```

## License

MIT

## Keywords

vue image mobile swipe scale drag
