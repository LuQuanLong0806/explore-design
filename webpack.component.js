const path = require('path')
// 要处理.vue结尾的文件 需要 vue-loader 模块
const { VueLoaderPlugin } = require('vue-loader');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// VUE自动集成的插件
const glob = require('glob')
/** entry
 *  {
 *     card: './components/lib/card/index.js',
 *     demo: './components/lib/card/demo.js',
 *  }
*/
const entry = {
    directives: './directives/index.js', // 自定义指令入口
    util: './util/index.js', // 工具入口
    components: './components/index.js', // 组件入口
    index: './index.js' // 全局入口
};

// 遍历生成所有的组件入口路径
async function makeList(dirPath, list) {
    // 获取指定路径下的所有index.js文件
    const files = glob.sync(`${dirPath}/**/index.js`);
    for (let file of files) {
        const component = file.split(/[/.]/)[2];
        // 注册进list 对应的组件和文件路径
        list[component] = `./${file}`;
    }
}
// 单独打包组件js文件 
// makeList('components/lib', entry); 

module.exports = {
    entry, // 入口文件
    mode: 'development',
    output: {
        filename: '[name].umd.js', // card.umd.js
        path: path.resolve(__dirname, 'dist/lib'), // 必须是一个绝对路径
        library: 'exploreDesign', // 会把所打包文件的输出配置到这个字段下面
        libraryTarget: 'umd', // 告诉webpack 打包成 umd这种格式的文件 
    },

    resolve: {
        alias: {
            "@": path.join(__dirname, "examples"), // 目录快捷方式配置
            "components": path.join(__dirname, "components"), // 目录快捷方式配置
            "directives": path.join(__dirname, "directives"), // 目录快捷方式配置
            "util": path.join(__dirname, "util"), // 目录快捷方式配置
            // "lib": path.join(__dirname, "components/lib"), // 目录快捷方式配置
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],//以上文件引入可以省略后缀名
    },
    // 注册插件
    plugins: [
        // 解析vue文件
        new VueLoaderPlugin(),
        // 压缩js代码
        new UglifyJsPlugin({
            include: /\.js$/,
            parallel: true,
            uglifyOptions: {
                // 删除注释
                output: {
                    comments: false,
                },
                // 删除console debugger 删除警告
                warnings: false,
                compress: {
                    drop_console: true,//console
                    drop_debugger: true,
                    pure_funcs: ['console.log']//移除console
                }
            }
        })
    ],
    module: {
        // rules 告诉webpack 对于什么样的文件 使用什么的loader
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    },
}