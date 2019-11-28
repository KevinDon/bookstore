import Vue from 'vue'
import Router from 'vue-router'
import customRouter from '@/components/router.js'

Vue.use(Router);

// Vue.$logger.log(customRouter);
export default new Router({
    mode: 'history',
    //base: __dirname,
    //linkActiveClass: 'active', // 更改激活状态的Class值
    routes: customRouter
})
