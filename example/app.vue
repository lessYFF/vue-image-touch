<template>
    <div>
        {{ name }}
        <div class="image-list">
            <div class="image-item" @click="openImageTouch(index)" :key="index" v-for="(item, index) of imgList">
                <img :src="item" alt="image cover" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    name: string = 'Hello World!'
    imgList: Array<any> = [
        'http://img.hao661.com/qq.hao661.com/uploads/allimg/c140912/14105134WT5Z-1EO.jpg',
        'http://img.hao661.com/qq.hao661.com/uploads/allimg/c140912/14105134X14b0-25B6.jpg',
        'http://img.hao661.com/qq.hao661.com/uploads/allimg/c140912/14105134X43V0-3M41.jpg',
        'http://img.hao661.com/qq.hao661.com/uploads/allimg/c140912/14105134XP2P-51423.jpg',
    ]
    openImageTouch(arg: number) {
        this.$imageTouch({
            imageList: this.imgList,
            activedIndex: arg,
        })
    }
}
</script>

<style lang="less">
@primary-color: white;
@bg: white;
body {
    color: @primary-color;
    background-color: @bg;
}
.image-list {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.image-item {
    width: calc((100% - 20px) / 3);
    height: calc((100% - 20px) / 3);
    margin-bottom: 6px;
    overflow: hidden;

    img {
        max-width: 100%;
        max-height: 100%;
    }
}
</style>
