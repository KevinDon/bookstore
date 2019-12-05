/**
 * *@2019-11-27
 * *@author Kevin
 * *@describe vue-cli 3.x配置文件
 */
'use strict';
// import configs from '@/lib/sysConfig'
// vue.config.js
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    // baseUrl: '/',//vue-cli3.3以下版本使用
    publicPath:'./',//vue-cli3.3+新版本使用
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: false,
    configureWebpack: () => {},

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: false,
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,

    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack配置
    // see https://cli.vuejs.org/zh/config/#chainwebpack
    chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_components',resolve('src/components'))
            .set('_assets', resolve('src/assets'))
            .set('_styles', resolve('src/assets/styles'))
            .set('_static', resolve('static'))
    },

    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'dev',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
       proxy: {
            '/bookstore': {
                target: 'http://59.42.42.188:86/shangjieti', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/bookstore': ''
                }
            }
        }, // 设置代理
    },

    //其他配置....
    pluginOptions: {
        'style-resources-loader': {
          preprocess: 'stylus',
          patterns: [
            'D:\\workspace\\bookstore\\src\\assets\\css\\stylus\\global.styl'
          ],
          preProcessor: 'stylus'
        },

    }
};
