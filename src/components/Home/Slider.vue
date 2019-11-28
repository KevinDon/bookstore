<template>
    <mt-swipe :auto="4000" @change="imgChange">
            <mt-swipe-item v-for="(sliderimage, _index) in sliderImages" :key="sliderimage.id">
                <img :class="_index" :src="sliderimage.url" :alt="sliderimage.alt" :title="sliderimage.title" >
            </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        name: "Slider",
        data (){
            return {
                sliderImages: [
                    {
                        id:1,
                        url: require('../../../static/images/sliderImages/bookstore_01.jpg'),
                        alt:'天帝纪元',
                        title:'天帝纪元'
                    },
                    {
                        id:2,
                        url: require('../../../static/images/sliderImages/bookstore_02.jpg'),
                        alt:'我在黄泉有座房',
                        title:'天帝纪元'
                    },
                    {
                        id:3,
                        url: require('../../../static/images/sliderImages/bookstore_03.jpg'),
                        alt:'超凡世界',
                        title:'超凡世界'
                    }
                ]
            }
        },
        methods: {
            imgChange: function(index){
                let vm = this;
                vm.$logger.domlog('切换Image' + index)
            }
        }
    }
</script>

<style scoped lang="stylus">
    .mint-swipe
        height: 120px;
        .mint-swipe-item
            & > img
                width: 100%;
</style>
