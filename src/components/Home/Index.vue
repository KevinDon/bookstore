<template>
    <div class="index">
        <header>
            <div class="logo">
                <img :src="require('_static/images/logo.png')" alt="Book Store">
            </div>
           <div class="search">
               <a href="javascript:void (0)" id="openSearchPopup" @click="openSearchPopup">
                   <i class="icon iconfont icon-search"></i>
                   {{bookName}}
               </a>
           </div>
            <div id="searchPopup" v-show="searchPopStatus">
                <form action="">
                    <mt-search  v-model="commodityName" cancel-text="取消" placeholder="搜索"/>
                </form>
            </div>
        </header>
        <div class="content">
            <Slider :conf="slideConf"/>
        </div>
    </div>
</template>

<script>
    import Slider from "_components/core/components/Slider";
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
                commodityName: '请输入书名/作者',
                searchPopStatus: false,
                bookName:'诡秘之主'
            }
        },
        mounted: ()  => {},
        computed: {},
        methods: {
            openSearchPopup: () => {
                this.searchPopStatus = !this.searchPopStatus;
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
