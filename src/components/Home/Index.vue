<template>
    <div class="index">
        <header>
            <div class="logo">
                <img :src="require('_static/images/logo.png')" alt="Book Store">
            </div>
           <div class="search">
               <a href="javascript:void (0)" id="searchPopup" @click="openSearchPopup(mtSearchConf)">
                   <i class="icon iconfont icon-search"></i>
                   {{bookName}}
               </a>
           </div>
            <div id="searchForm" v-show="mtSearchConf.searchPopStatus" ref="searchForm">
                <form action="" @submit.prevent="" target="frameFile">
                    <mt-search  v-model="mtSearchConf.commodityName" cancel-text="取消" placeholder="搜索" @keyup.enter.native="search(mtSearchConf)" :autofocus="true" :show="true" >
                        <div :key="item.id" v-for="item in mtSearchConf.searchResult">
                            <span class="resultImg"><img :src="item.bookImg" :alt="item.bookName"></span>
                            <div>{{item.bookName}}</div>
                        </div>
                    </mt-search>
                </form>
                <div id="searchResult"  v-show="mtSearchConf.searchClicked"></div>
            </div>
        </header>
        <div class="content">
            <Slider :conf="slideConf" :callback="sliderCallback"/>
        </div>
    </div>
</template>

<script>
    import Slider from "_components/core/components/Slider";
    import utils from "_components/core/utils";
    export default {
        name: "Index",
        components: {
            Slider
        },
        data(){
            return {
                value: true,
                slideConf: {
                    getUrl : "/base/books/searchImages.do/"
                },
                bestSellerConf:{
                    bestSeller: false,
                    imagesData: [{
                        id: 1,
                        bookImg: require('_static/images/bestseller/bestseller_01.jpg'),
                        bookName:'天帝纪元',
                        title:'天帝纪元'
                    }, {
                        id: 2,
                        bookImg: require('_static/images/bestseller/bestseller_02.jpg'),
                        bookName:'我在黄泉有座房',
                        title:'天帝纪元'
                    }, {
                        id: 3,
                        bookImg: require('_static/images/bestseller/bestseller_03.jpg'),
                        bookName:'超凡世界',
                        title:'超凡世界'
                    }, {
                        id: 4,
                        bookImg: require('_static/images/bestseller/bestseller_04.jpg'),
                        bookName:'超凡世界',
                        title:'超凡世界'
                    }, {
                        id: 5,
                        bookImg: require('_static/images/bestseller/bestseller_05.jpg'),
                        bookName:'超凡世界',
                        title:'超凡世界'
                    }, {
                        id: 6,
                        bookImg: require('_static/images/bestseller/bestseller_06.jpg'),
                        bookName:'超凡世界',
                        title:'超凡世界'
                    }, {
                        id: 7,
                        bookImg: require('_static/images/bestseller/bestseller_07.jpg'),
                        bookName:'超凡世界',
                        title:'超凡世界'
                    }],
                    case:'vertical'
                },
                bookName:'诡秘之主',

                //MT SEARCH CONF
                mtSearchConf: {
                    getUrl:'/base/books/searchKeyword.do/',
                    commodityName: '请输入书名/作者',
                    searchPopStatus: false,
                    searchClicked: false,
                    searchResult: []
                },
            }
        },
        mounted: function()  {
            this.$nextTick(()=> {
                let me = this;
                //元素绑定绑定点击事件
                let cancel = me.$refs['searchForm'].querySelectorAll('.mint-searchbar-cancel')[0];
                cancel.onclick = () => {
                    console.log('test');
                    me.searchPopStatus = false;    // 取消事件
                };
            })
        },
        computed: {},
        methods: {
            openSearchPopup: function(conf) {
                // this.$set(this.searchPopStatus, 'searchPopStatus', !this.searchPopStatus);
                conf.searchPopStatus = !conf.searchPopStatus;
            },
            closeSearchPopup: function() {
                // this.$set(this.searchPopStatus, 'searchPopStatus', !this.searchPopStatus);
                this.searchPopStatus = false;
            },
            search: async function(conf){
                console.log('search');
                conf.searchClicked = true;
                await utils.apiRequest(conf.getUrl, {}).then(response =>{
                    conf.searchResult = response.data;
                }).catch(err => {
                    this.$logger.domlog(err);
                });
            },
            sliderCallback : function(index){
                this.$logger.domlog(index);
            }
        },
        watch: {
            popSearchFlag: ()=>{

            }
        }
    }
</script>

<style scoped lang="stylus">
    header
        overflow hidden;
        margin-bottom .5rem;
        &>.logo
            float left;
        &>.search
            width 65%;
            float right;
            a
                text-decoration: none;
                cursor: pointer;
                height 2rem
                font-size: .8125rem;
                line-height: 2rem;
                display: block;
                text-align: center;
                color: #969ba3;
                border-radius: .25rem;
                background-color: #f5f5f5;
        #searchForm
            position: fixed;
            z-index: 20;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #fff;

            &>resultImg
                img
                    width 5rem
</style>
