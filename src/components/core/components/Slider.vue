<template>
    <div :class="componentClass">
        <mt-swipe :auto="4000" @change="imgChange">
            <mt-swipe-item v-for="(sliderimage, _index) in sliderImages" :key="sliderimage.id">
                <img :class="_index" :src="sliderimage.bookImg" :alt="sliderimage.bookName" :title="sliderimage.bookName" >
                <span v-show="is_show_title">{{sliderimage.bookName}}</span>
            </mt-swipe-item>
        </mt-swipe>
    </div>
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
            isRemote : {
                default: true
            },
            imagesData: {
                type: Array,
                default:  () => {
                    return [];
                }
            },
            case: {
                type: String,
                default: () => {
                    // enumerate [cross, vertical]
                    return 'cross'
                }
            },
            is_show_title: {
                type: Boolean,
                default: false
            }
        },
        data (){
            return {
                sliderImages: [ ],
                componentClass : ''
            }
        },
        mounted: function() {
            let me = this;
            //初始化图片数据
            if(me.isRemote){
                me.getRemoteData();
            }else{
                me.sliderImages = me.imagesData
            }
            //判断slider
            me.componentClass = me.case === 'cross' ? 'slider_wrapper_cross' : 'slider_wrapper_vertical'

        },
        methods: {
            imgChange: function(index){
                let vm = this;
                vm.$logger.domlog('切换Image' + index)
            },
            getRemoteData: async function(){
                await utils.apiRequest(this.getUrl, {}).then(response =>{
                    this.sliderImages = response.data;
                }).catch(err => {
                    this.$logger.domlog(err);
                });
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
                display: block;
            &> span
                font-size: .8125rem;
                line-height: 1.25;
                overflow: hidden;
                max-height: 2.125rem;
                margin: .5rem 0 .125rem;
    .slider_wrapper_vertical
        .mint-swipe
            height: 150px;
            .mint-swipe-item
                width 100px
                & > img
                    width: 71px;
</style>
