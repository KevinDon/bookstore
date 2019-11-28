<template>
    <mt-swipe :auto="4000" @change="imgChange">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        name: "Slider",
        data (){
            return {
                sliderImages: []
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
        height: 200px;
        .mint-swipe-item
            &:nth-child(1)
                background-color:red;

            &:nth-child(2)
                background-color:blue;

            &:nth-child(3)
                background-color:lightblue;

</style>
