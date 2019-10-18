<!-- 移动端图片弹层查看交互：滑动／拖动／缩放 -->
<template>
    <v-touch v-if="isShow"
        @panend = "panEnd"
        @panmove = "panMove"
        @pinchend = "pinchEnd"
        @pinchmove = "pinchMove"
        @swipeleft="swipeLeft"
        @swiperight="swipeRight">
        <div class="swiper-image"
            :class="[isShow ? 'zoomIn' : 'zoomOut']"
            @click.stop="handleClose">
            <!-- 蒙层展示 -->
            <div class="swiper-image-hd">
                <div class="swiper-image-hd__mask" @touchmove.prevent.stop />
            </div>
            <!-- 图片展示 -->
            <div class="swiper-image_bd"
                :style="{
                    width: `${swiperWrapWidth}px`,
                    left: `${swiperWrapLeft}px`
                }">
                <div class="swiper-image_bd__wrap"
                    :style="{ width: `${pageWidth}px`}"
                    v-for="(item, index) of imgList">
                    <img class="swiper-image_bd__img"
                        :style="{ transform: `scale(${ pinList[index] || 1})` }"
                        :src="item" alt="priview image"/>
                </div>
            </div>
            <!-- 下标展示 -->
            <div class="swiper-image_ft">
                <span class="swiper-image_ft__sub"
                    :class="{'swiper-image_ft__sub-actived': index === activedSub }"
                    v-for="(item,index) of imgList">
                </span>
            </div>
        </div>
    </v-touch>
</template>

<script lang='ts'>
import vueTouch from 'vue-touch';
import { Vue, Component, Prop } from 'vue-property-decorator';

Vue.use(vueTouch, { name: 'v-touch' });
@Component
export default class SwiperImage extends Vue {
    @Prop()
    public imgList: Array<any>;

    isShow: boolean = false;
    activedSub: number = 0;
    swiperWrapLeft: number = 0;
    pinList: Array<number> = [];

    get pageWidth() {     // 页面宽度
        let _pageWidth = window.innerWidth;

        if (!_pageWidth ) {  //兼容性问题
            if (document.compatMode === 'CSS1Compat') {
                _pageWidth = document.documentElement.clientWidth;  //适合移动版IE
            } else {
                _pageWidth = document.body.clientWidth;   //混杂模式下的IE
            }
        }

        return _pageWidth + 16;
    }

    get swiperWrapWidth() {    // 预览左偏移距离
        return (this.pageWidth * this.imgList.length);
    }

    created() {
        this.$on('openSwiper', this.show);
        this.$on('closeSwiper', this.hidden);
    }

    hidden() {  // 关闭预览
        this.isShow = false;
    }

    show(args) { // 打开预览
        if (this.unionId === args[0]) {
            this.activedSub = args[1];
            this.isShow = true;
            this.reset();
        }
    }

    handleClose() {
        this.$emit('closeSwiper');
    }

    swipeLeft() { // 左滑
        const max = this.imgList.length - 1;

        this.activedSub = this.activedSub === max ? max : ++this.activedSub;
        this.swiperWrapLeft = - (this.pageWidth * this.activedSub);
    }

    swipeRight() { // 右滑
        this.activedSub = !this.activedSub ? 0 : --this.activedSub;
        this.swiperWrapLeft = - (this.pageWidth * this.activedSub);
    }

    pinchMove(e) { // 缩小/放大执行
        this.$set(this.pinList, this.activedSub, e.scale.toFixed(2));
    }

    pinchEnd(e) { // 缩小/放大停止
        const { scale } = e;
        const _scale = scale < 1 ? 1 : scale.toFixed(2);

        this.$set(this.pinList, this.activedSub, _scale);
    }

    panMove(e) { // 左右拖动
        const { additionalEvent, distance, velocity } = e;
        if (Math.abs(velocity) > 0.3) return;

        if (additionalEvent === 'panleft') {
            this.swiperWrapLeft = - (this.pageWidth * this.activedSub + Math.abs(distance));
        } else if (additionalEvent === 'panright') {
            this.swiperWrapLeft = - (this.pageWidth * this.activedSub - Math.abs(distance));
        }
    }

    panEnd(e) {  // 拖动结束归位或者滑动至下一个
        const { deltaX, distance, velocity } = e;
        const isSwipe = this.pageWidth/2 < Math.abs(distance) && Math.abs(velocity) < 0.3;

        if (isSwipe) {
            deltaX < 0 ? this.swipeLeft() : this.swipeRight();
        } else {
            this.swiperWrapLeft = - (this.pageWidth * this.activedSub);
        }
    }

    reset() { // 重置图片位置和大小
        this.pinList = [];
        this.swiperWrapLeft = - (this.pageWidth * this.activedSub);
    }
}
</script>

<style scoped>
    .swiper-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-origin: center;
    }
    .swiper-image-hd__mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
        background-color: #000;
    }
    .swiper-image_bd {
        position: fixed;
        top: 50%;
        z-index: 1001;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        background-color: #000;
        transform: translateY(-50%);
        transition: left .3s ease;
    }
    .swiper-image_bd__wrap {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        overflow: hidden;
        margin-right: 10px;
    }

    .swiper-image_ft {
        position: fixed;
        bottom: 15px;
        z-index: 1001;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .swiper-image_ft__sub {
        width: 8px;
        height: 4px;
        border-radius: 8px;
        margin-right: 6px;
        background-color: rgba(255, 255, 255, .3);
    }

    .swiper-image_ft__sub.swiper-image_ft__sub-actived {
        width: 12px;
        background-color: rgba(255, 255, 255, 1);
    }

    .zoomIn {
        animation: zoomIn .2s ease-in;
    }

    .zoomOut {
        animation: zoomOut .2s ease-out;
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
