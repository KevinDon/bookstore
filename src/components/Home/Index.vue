<template>
    <div class="index">
        <header>
            <div class="logo">
                <img :src="require('_static/images/logo.png')" alt="Book Store">
            </div>
           <div class="search">
               <a href="javascript:void (0)" id="searchPopup" @click="openSearchPopup">
                   <i class="icon iconfont icon-search"/>
                   {{bookName}}
               </a>
           </div>
            <searchKeyword :conf="mtSearchConf" @setPopStatus="setPopStatus"  :searchShow="searchPopStatus" />
        </header>
        <div class="content">
            <Slider :conf="slideConf" :callback="sliderCallback"/>
        </div>
    </div>
</template>

<script>
    import Slider from "_components/core/components/Slider";
    import searchKeyword from "_components/Home/searchKeyword";
    export default {
        name: "Index",
        components: {
            Slider,
            searchKeyword
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
                searchPopStatus: false,
                //MT SEARCH CONF
                mtSearchConf: {
                    getUrl:'/base/books/searchKeyword.do/',
                },
            }
        },
        mounted: function()  {  },
        computed: {},
        methods: {
            openSearchPopup: function() {
                this.searchPopStatus = true;
            },
            sliderCallback : function(index){
                this.$logger.domlog(index);
            },
            setPopStatus: function(status){
                this.searchPopStatus = status;
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
</style>
