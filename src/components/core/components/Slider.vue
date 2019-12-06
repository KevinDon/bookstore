<template>
    <div>
        <mt-swipe :auto="4000" @change="imgChange">
            <mt-swipe-item v-for="(sliderimage, _index) in sliderImages" :key="sliderimage.id">
                <img :class="_index" :src="sliderimage.bookImg" :alt="sliderimage.bookName" :title="sliderimage.bookName" >
                <span v-show="baseConf.isShowTitle">{{sliderimage.bookName}}</span>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    import utils from '_components/core/utils'
    export default {
        name: "Slider",
        props: {
            // 接受外部组件参数
            conf: {
                type: Object,
                default :() => {},
            },
            callback: {}
        },
        data (){
            return {
                sliderImages: [ ],
            }
        },
        mounted: function() {
            let me = this;
            //判断slider
            me.componentClass = me.case === 'cross' ? 'slider_wrapper_cross' : 'slider_wrapper_vertical';
            //初始化图片数据
            if(me.baseConf.isRemote){
                me.getRemoteData(me.baseConf);
            }else{
                me.sliderImages = me.baseConf.imagesData
            }
        },
        computed:{
            // 初始化组件参数
            baseConf() {
                let conf = this.conf ? this.conf : {};
                //接受外部定义参数
                let defaultConf = {
                    // 本地数据
                    imagesData: [],
                    //是否显示轮播图标题
                    isShowTitle: false,
                    // 是否远程
                    isRemote : true,
                    // 外部定义api接口
                    getUrl: '',
                    // 轮播类型
                    //TODO
                    // case: {
                    //     type: String,
                    //     default: () => {
                    //         // enumerate [cross, vertical]
                    //         return 'cross'
                    //     }
                    // },
                    case: 'cross'
                };
                return Object.assign({}, defaultConf, conf)
            }
        },
        methods: {
            imgChange: function(index){
                let me = this;
                if(me.callback) me.callback(index); // 将参数传回父组件中的回调函数
            },
            getRemoteData: async function(conf){
                let me = this;
                await utils.apiRequest(conf.getUrl, {}).then(response =>{
                    me.sliderImages = response.data;
                }).catch(err => {
                    this.$logger.domlog(err);
                });
            }
        },
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
</style>
