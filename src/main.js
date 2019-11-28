import Vue from 'vue'
import Router from './router'
import App from './App.vue'
import Logger from '@/core/plugins/Logger'
import Mock from '@/mock/index'
import Mint from 'mint-ui';

// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';

//注册 MuseUI
// Vue.use(MuseUI);
Vue.use(Mint);

//加载日志函数
Vue.use(Logger);

//加载Mock模块
Vue.use(Mock);


Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router:Router,
}).$mount('#app');
