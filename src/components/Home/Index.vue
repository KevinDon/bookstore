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
                        <div :key="item.id" v-for="item in mtSearchConf.searchResult"  class="searchResult">
                            <span class="bookImg"><img :src="item.bookImg" :alt="item.bookName"></span>
                            <span class="bookContent">
                                <span class="bookName">{{item.bookName}}</span>
                                <span class="brief">{{item.brief}}</span>
                                <span class="author">
                                    <i class="icon iconfont icon-account"></i>{{item.author}}
                                    <span  class="book-meta">
                                        <span>{{item.type}}</span>
                                        <span style="color: red">{{item.isEnd}}</span>
                                        <span style="color:#4284ed">{{item.wordCount}}</span>
                                    </span>
                                </span>
                            </span>
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
                //元素绑定绑定点击取消事件
                let cancel = me.$refs['searchForm'].querySelectorAll('.mint-searchbar-cancel')[0];
                cancel.onclick = () => {
                    //初始化搜索结果
                    me.mtSearchConf.searchPopStatus = false;
                    me.mtSearchConf.searchClicked = false;
                    me.mtSearchConf.searchResult = [];
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
            .searchResult
                overflow hidden;
                width 100%;
                float left;
                margin-top 1rem;
                margin-left: .3em;
                margin-right .3rem;
                span
                    float left;
                    &.bookContent
                        width 75%;
                        margin-right: .5rem;
                        margin-left: .5rem;
                        span
                            display block;
                            width: 100%;
                            text-align: left;
                            &.bookName
                                line-height: 1.4;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            &.brief
                                font-size: .875rem;
                                line-height: 1.125rem;
                                overflow: hidden;
                                margin: .375rem 0;
                                color: #969ba3;
                                height 2.8rem;
                            &.author
                                font-size: .8125rem;
                                display: block;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                color: #969ba3;
                                & span.book-meta
                                    width 50%
                                    float right;
                                    & span
                                        width auto
                                        color: #969ba3;
                                        opacity: .5;
                                        border: 1px solid;
                                        border-radius: .11111em;
                                        margin-right: 0.2rem;
                img
                    height 6rem;

</style>
