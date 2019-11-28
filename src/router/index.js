import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Index'
import Banner from '@/components/Banner/Banner'
import Cart from '@/components/Cart/Cart'
import Account from '@/components/Account/Account'

Vue.use(Router);

export default new Router({
    mode: 'history',
    //base: __dirname,
    //linkActiveClass: 'active', // 更改激活状态的Class值
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/banner',
            name: 'Banner',
            component: Banner
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/account',
            name: 'Account',
            component: Account
        }
    ]
})
