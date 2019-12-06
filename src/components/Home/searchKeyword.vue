<template>
    <div id="searchForm" v-show="searchShow" ref="searchForm">
        <form action="" @submit.prevent="" target="frameFile">
            <mt-search  v-model="mtSearchConf.commodityName" cancel-text="取消" placeholder="搜索" @keyup.enter.native="getRemoteData(mtSearchConf)" :autofocus="true" >
                <div :key="item.id" v-for="item in searchResult"  class="searchResult">
                    <span class="bookImg"><img :src="item.bookImg" :alt="item.bookName"></span>
                    <span class="bookContent">
                                <span class="bookName">{{item.bookName}}</span>
                                <span class="brief">{{item.brief}}</span>
                                <span class="author">
                                    <i class="icon iconfont icon-account"/>{{item.author}}
                                    <span  class="book-meta">
                                        <span>{{item.type}}</span>
                                        <span style="color: red">{{item.isEnd}}</span>
                                        <span style="color:#4284ed">{{item.wordCount}}</span>
                                    </span>
                                </span>
                            </span>
                </div>
            </mt-search>
        </form>
        <div id="searchResult"  v-show="mtSearchConf.searchClicked"></div>
    </div>
</template>

<script>
    import utils from '_components/core/utils'
    export default {
        name: "searchKeyword",
        props: {
            // 接受外部组件参数
            conf: {
                type: Object,
                default :() => {},
            },
            searchShow: {
                type: Boolean,
                default: false
            },
            callback: {}
        },
        data (){
            return {
                searchResult: [ ],
            }
        },
        mounted: function()  {
            this.$nextTick(()=> {
                let me = this;
                //元素绑定绑定点击取消事件
                let cancel = me.$refs['searchForm'].querySelectorAll('.mint-searchbar-cancel')[0];
                cancel.onclick = () => {
                    //初始化搜索结果
                   this.$emit('setPopStatus', false);
                    me.mtSearchConf.searchClicked = false;
                    me.mtSearchConf.searchResult = [];
                };
            })
        },
        computed: {
            // 初始化组件参数
            mtSearchConf() {
                let conf = this.conf ? this.conf : {};
                //接受外部定义参数
                let defaultConf = {
                    commodityName: '请输入书名/作者',
                    searchPopStatus: false,
                    searchClicked: false,
                };
                return Object.assign({}, defaultConf, conf)
            }
        },
        methods: {
            getRemoteData: async function(conf){
                let me = this;
                conf.searchClicked = true;
                await utils.apiRequest(conf.getUrl, {}).then(response =>{
                    me.searchResult = response.data;
                }).catch(err => {
                    this.$logger.domlog(err);
                });
            },
        },
    }
</script>

<style scoped lang="stylus">
    #searchForm
        position: fixed;
        z-index: 20;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        .searchResult
            overflow hidden;
            width 100%;
            float left;
            margin-top 1rem;
            margin-left: .3em;
            margin-right .3rem;
            span
                float left;
                &.bookContent
                    width 75%;
                    margin-right: .5rem;
                    margin-left: .5rem;
                    span
                        display block;
                        width: 100%;
                        text-align: left;
                        &.bookName
                            line-height: 1.4;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        &.brief
                            font-size: .875rem;
                            line-height: 1.125rem;
                            overflow: hidden;
                            margin: .375rem 0;
                            color: #969ba3;
                            height 2.8rem;
                        &.author
                            font-size: .8125rem;
                            display: block;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            color: #969ba3;
                            & span.book-meta
                                width 50%
                                float right;
                                & span
                                    width auto
                                    color: #969ba3;
                                    opacity: .5;
                                    border: 1px solid;
                                    border-radius: .11111em;
                                    margin-right: 0.2rem;
        img
            height 6rem;
</style>
