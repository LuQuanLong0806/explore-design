// 公共入口文件
// 引入组件
import iDemo from "./demo/index.js";
import iCard from "./card/index.js";
import imgPreview from "./image-preview/index.js";
// 引入自定义指令
import directives from "./../../derectives/index.js";
const components = {
    iDemo,
    iCard,
    imgPreview
}
const install = function (Vue) {
    if (install.installed) return; // 避免重复安装
    Object.keys(components).forEach(d => {
        Vue.use(components[d])
    });
    // 安装自定义指令
    Object.keys(directives).forEach(d => {
        Vue.directive(d, directives[d])
    });
};

// ------------- 导出组件 -------------
// 模块导出
export const Card = iCard.Card;
export const Demo = iDemo.Demo;
export const imagePreview = imgPreview.imagePreview;
// 全局引入
export default {
    install,
    directives,
    Card,
    Demo,
    imagePreview
};
