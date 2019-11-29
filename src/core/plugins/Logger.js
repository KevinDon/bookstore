// 日志工具
const Logger = (Vue, options) => {
    Vue.prototype.$logger = new Vue({
        data () {
            return {...options}
        },
        methods: {
            log (msg = '', level = 'info', opts) {
                // eslint-disable-next-line no-console
                console[level](`[${level}] ${msg}\n`, opts)
            },
            debug(msg='', opts){
                this.log(msg,'debug',opts)
            },
            domlog (msg = '', data = {}) {
                // eslint-disable-next-line no-console
                console['log'](msg, data)
            },
        }
    })
}

export default Logger
