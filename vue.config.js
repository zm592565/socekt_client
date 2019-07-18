
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath:'./',
    outputDir: 'dist',
    productionSourceMap: false,
    pages: {
        index:{
            entry: 'src/modules/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '物料申购',
        }
    },
    lintOnSave: false,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('$', resolve('public'))
            .set('assets',resolve('src/assets'))
    },
    devServer: {
        port: 8080,     // 端口
        disableHostCheck: true,//测试
        // proxy:proxyConfig.posxys,
    },   

    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: true
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    pluginOptions: {
        // ...

    },
    /*webpack配置*/
    configureWebpack: {
        plugins : [],
        externals:{
            "io":"io",
            "axios":'axios',
            'vue': "Vue",
            'vuex':'Vuex',
            "vue-router": "VueRouter",
            "axios":'axios',
            'iview':'iView'
        }
    }

}
