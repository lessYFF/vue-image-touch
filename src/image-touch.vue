<!-- 移动端弹层图片交互：滑动／拖动／缩放 -->
<template>
    <v-touch
        v-if="isShow"
        @panend="panEnd"
        @panmove="panMove"
        @pinchend="pinchEnd"
        @pinchmove="pinchMove"
        @swipeleft="swipeLeft"
        @swiperight="swipeRight"
    >
        <div class="image-touch" :class="[isShow ? 'zoomIn' : 'zoomOut']" @click.stop="hidden">
            <!-- 蒙层展示 -->
            <div class="image-touch-hd">
                <div class="image-touch-hd__mask" :style="{ 'background-color': bgColor }" @touchmove.prevent.stop />
            </div>
            <!-- 图片展示 -->
            <div
                class="image-touch_bd"
                :style="{
                    transition,
                    width: `${touchWrapWidth}px`,
                    left: `${touchWrapLeft}px`,
                }"
            >
                <div
                    class="image-touch_bd__wrap"
                    :style="{ width: `${pageWidth}px` }"
                    v-for="(item, index) of imageList"
                >
                    <img
                        class="image-touch_bd__img"
                        :style="{ transform: `scale(${pinList[index] || 1})` }"
                        :src="item"
                        alt="touch image"
                    />
                </div>
            </div>
            <!-- 进度展示 -->
            <div class="image-touch_ft" v-if="isShowBar">
                <span
                    class="image-touch_ft__sub"
                    :class="{ 'image-touch_ft__sub-actived': index === activedSub }"
                    v-for="(item, index) of imageList"
                ></span>
            </div>
        </div>
    </v-touch>
</template>

<script lang="ts">
import vueTouch from 'vue-touch'
import { Vue, Component, Prop } from 'vue-property-decorator'

Vue.use(vueTouch, { name: 'v-touch' })
@Component
export default class ImageTouch extends Vue {
    @Prop() // 图片数据源
    public imageList: Array<any>

    @Prop({
        // 是否显示进度条
        default: true,
    })
    public isShowBar: boolean

    @Prop({
        // 选中目标
        default: 0,
    })
    public activedIndex: number

    @Prop({
        // 图片弹层背景
        default: '#000',
    })
    public bgColor: string

    @Prop({
        // 过渡动画
        default: 'left .3s ease',
    })
    public transition: string

    isShow: boolean = false
    activedSub: number = 0
    touchWrapLeft: number = 0
    pinList: Array<number> = []

    get pageWidth() {
        // 页面宽度
        let _pageWidth = window.innerWidth

        if (!_pageWidth) {
            //兼容性问题
            if (document.compatMode === 'CSS1Compat') {
                _pageWidth = document.documentElement.clientWidth //适合移动版IE
            } else {
                _pageWidth = document.body.clientWidth //混杂模式下的IE
            }
        }

        return _pageWidth + 16
    }

    get touchWrapWidth() {
        // 预览左偏移距离
        return this.pageWidth * this.imageList.length
    }

    hidden() {
        // 关闭预览
        this.isShow = false
    }

    show(args) {
        // 打开预览
        this.isShow = true
        this.reset()
    }

    swipeLeft() {
        // 左滑
        const max = this.imageList.length - 1

        this.activedSub = this.activedSub === max ? max : ++this.activedSub
        this.touchWrapLeft = -(this.pageWidth * this.activedSub)
    }

    swipeRight() {
        // 右滑
        this.activedSub = !this.activedSub ? 0 : --this.activedSub
        this.touchWrapLeft = -(this.pageWidth * this.activedSub)
    }

    pinchMove(e) {
        // 缩小/放大执行
        this.$set(this.pinList, this.activedSub, e.scale.toFixed(2))
    }

    pinchEnd(e) {
        // 缩小/放大停止
        const { scale } = e
        const _scale = scale < 1 ? 1 : scale.toFixed(2)

        this.$set(this.pinList, this.activedSub, _scale)
    }

    panMove(e) {
        // 左右拖动
        const { additionalEvent, distance, velocity } = e
        if (Math.abs(velocity) > 0.3) return

        if (additionalEvent === 'panleft') {
            this.touchWrapLeft = -(this.pageWidth * this.activedSub + Math.abs(distance))
        } else if (additionalEvent === 'panright') {
            this.touchWrapLeft = -(this.pageWidth * this.activedSub - Math.abs(distance))
        }
    }

    panEnd(e) {
        // 拖动结束归位或者滑动至下一个
        const { deltaX, distance, velocity } = e
        const isSwipe = this.pageWidth / 2 < Math.abs(distance) && Math.abs(velocity) < 0.3

        if (isSwipe) {
            deltaX < 0 ? this.swipeLeft() : this.swipeRight()
        } else {
            this.touchWrapLeft = -(this.pageWidth * this.activedSub)
        }
    }

    reset() {
        // 重置图片位置、进度和尺寸
        this.pinList = []
        this.activedSub = this.activedIndex
        this.touchWrapLeft = -(this.pageWidth * this.activedIndex)
    }
}
</script>

<style scoped lang="less">
.image-touch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
}
.image-touch-hd__mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background-color: #000;
}
.image-touch_bd {
    position: fixed;
    top: 50%;
    z-index: 1001;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    background-color: #000;
    transform: translateY(-50%);
    transition: left 0.3s ease;
}
.image-touch_bd__wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    overflow: hidden;
    margin-right: 10px;
}
.image-touch_bd__img {
    max-width: 100%;
}
.image-touch_ft {
    position: fixed;
    bottom: 15px;
    z-index: 1001;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.image-touch_ft__sub {
    width: 8px;
    height: 4px;
    border-radius: 8px;
    margin-right: 6px;
    background-color: rgba(255, 255, 255, 0.3);
}

.image-touch_ft__sub.image-touch_ft__sub-actived {
    width: 12px;
    background-color: rgba(255, 255, 255, 1);
}

.zoomIn {
    animation: zoomIn 0.2s ease-in;
}

.zoomOut {
    animation: zoomOut 0.2s ease-out;
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale3d(0.2, 0.2, 0.2);
    }

    to {
        opacity: 1;
    }
}
@keyframes zoomOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>
