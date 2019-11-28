<template>
    <div class="tabs">
        <!--命名路由-->
        <ul>
            <router-link :to="{name:'Home'}" tag="li" exact>
                <div>
                    <i class="icon iconfont icon-home-fill"></i>
                </div>
                <div>首页</div>
            </router-link>
            <router-link :to="{name:'Banner'}" tag="li">
                <div>
                    <i class="icon iconfont icon-jewelry"></i>
                </div>
                <div>买书</div>
            </router-link>
            <router-link :to="{name:'Cart'}" tag="li">
                <div>
                    <i class="icon iconfont icon-cart-full"></i>
                </div>
                <div>购物车</div>
            </router-link>
            <router-link :to="{name:'Account',params:{user:'Kevin'}}" tag="li">
                <div>
                    <i class="icon iconfont icon-account"></i>
                </div>
                <div>我的</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tabs"
    }
</script>

<style scoped  lang="stylus">
    .tabs {
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fff;
        box-shadow: 0 2px 4px #000;
        width: 100%;
        & > ul, & > ul > li {
                      margin: 0;
                      padding: 0;
                  }
        ul {
            display: table;
            width: 100%;
            & > li {
                  text-align: center;
                  font-size: 16px;
                  display: table-cell;
                  padding: 8px 12px;
                  cursor: pointer;
                &.router-link-active{
                     color: #D0021B;
                 }
                & > div {
                  font-size: 14px;
                & > i {
                       font-size: 30px;
                   }
            }
            }
        }
    }
</style>
