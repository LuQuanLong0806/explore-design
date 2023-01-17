const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //  重新指定入口文件
    pages: {
        index: {
            entry: 'examples/main.js', // 入口文件
            template: 'public/index.html', // 使用的模板路径
            filename: 'index.html' // 模板名称
        }
    }
})
