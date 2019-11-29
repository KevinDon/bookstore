import Vue from 'vue'
import Router from './router'
import App from './App.vue'
import Logger from '@/core/plugins/Logger'
import Mock from '@/mock/index'
import Mint from 'mint-ui';
import VueCookies from 'vue-cookies'

//注册 MintUI
Vue.use(Mint);

//加载日志函数
Vue.use(Logger);

Vue.use(VueCookies);
//加载Mock模块
Vue.use(Mock);


Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router:Router,
}).$mount('#app');
