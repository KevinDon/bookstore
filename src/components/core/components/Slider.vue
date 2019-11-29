<template>
    <mt-swipe :auto="4000" @change="imgChange">
            <mt-swipe-item v-for="(sliderimage, _index) in sliderImages" :key="sliderimage.id">
                <img :class="_index" :src="sliderimage.url" :alt="sliderimage.alt" :title="sliderimage.title" >
            </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    import utils from '_components/core/utils'
    export default {
        name: "Slider",
        props: {
            // 外部定义api接口
            getUrl: {
                default: ''
            },
        },
        data (){
            return {
                sliderImages: [ ]
            }
        },
        mounted: function() {
            let me = this;
            me.getRemoteData();
        },
        methods: {
            imgChange: function(index){
                let vm = this;
                vm.$logger.domlog('切换Image' + index)
            },
            getRemoteData: async function(){
                await utils.apiRequest(this.getUrl, {}).then(response =>{
                    this.sliderImages = response.data;
                })
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
