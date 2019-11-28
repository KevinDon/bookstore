<template>
    <div class="index">
        这是首页
        <Slider />
    </div>
</template>

<script>
    import Slider from "_components/Home/Slider";
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
