// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true,
//     //  重新指定入口文件
//     pages: {
//         index: {
//             entry: 'examples/main.js', // 入口文件
//             template: 'public/index.html', // 使用的模板路径
//             filename: 'index.html' // 模板名称
//         }
//     },
// })

const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    transpileDependencies: true,
    productionSourceMap: false,
    publicPath: './',
    outputDir: 'explore-design',
    //  重新指定入口文件
    pages: {
        index: {
            entry: 'examples/main.js', // 入口文件
            template: 'public/index.html', // 使用的模板路径
            filename: 'index.html' // 模板名称
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@', resolve('./examples'))
            .set('components', resolve('./components'))
            .set('directives', resolve('./directives'))
            .set('util', resolve('./util'))
        // .set('lib', resolve('./components/lib'))
        //注意 store 和 router 没必要配置

    },
    devServer: {
        port: 8090,
        host: 'localhost',
        https: false,
        open: true
    },
}