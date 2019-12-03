<template>
    <div class="index">
        这是首页
        <Slider
                getUrl="/base/books/searchImages.do/"
        />
        <Slider
                :isRemote="best_seller"
                :imagesData="best_seller_images"
                :case="case_type"
                :is_show_title="true"
        />
    </div>
</template>

<script>
    import Slider from "_components/core/components/Slider";
    export default {
        name: "Index",
        data(){
            return {
                value: true,
                best_seller: false,
                best_seller_images: [{
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
                case_type:'vertical'
            }
        },
        components: {
            Slider
        }
    }
</script>

<style scoped>

</style>
