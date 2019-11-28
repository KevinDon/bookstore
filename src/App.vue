<template>
  <div id="app">
    <Tabs name="tabs"/>
    <router-view/>
  </div>
</template>

<script>
  import Tabs from "@/components/Tabs.vue"
  export default {
  name: 'app',
  mounted () {
    let vm = this;
    vm.$logger.log('Controller framework' , 'info', this);
  },
    components: {Tabs}
  }
</script>
<style  rel="stylesheet" >
  @import 'http:////at.alicdn.com/t/font_1533734_ojsyqcgwwrc.css'; /*引入阿里样式*/
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
