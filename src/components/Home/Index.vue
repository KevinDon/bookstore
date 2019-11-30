<template>
    <div class="index">
        这是首页
        <Slider
                getUrl="base/books/searchImages.do/"
        />
    </div>
</template>

<script>
    import Slider from "_components/core/components/Slider";
    export default {
        name: "Index",
        data(){
            return {
                value: true
            }
        },
        components: {
            Slider
        }
    }
</script>

<style scoped>

</style>
