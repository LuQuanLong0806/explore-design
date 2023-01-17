// 公共入口文件
// 引入组件
import exDemo from "./demo/index.js";
import exCard from "./card/index.js";
import imgPreview from "./image-preview/index.js";
// 引入自定义指令
import directives from "directives/index.js"; // 拖拽指令

// 引入工具
import utils from "util";

const components = {
    exDemo,
    exCard,
    imgPreview
}
const install = function (Vue) {
    if (install.installed) return; // 避免重复安装
    // 全局注册组件
    Object.keys(components).forEach(d => {
        Vue.use(components[d])
    });
    // 全局注册自定义指令
    Object.keys(directives).forEach(d => {
        Vue.directive(d, directives[d])
    });
    // 全局注册工具
    Object.keys(utils).forEach(d => {
        Vue.prototype['$' + d] = utils[d];
    });
};

// ------------- 导出组件 -------------
// 组件模块单独导出
export const Card = exCard.Card;
export const Demo = exDemo.Demo;
export const imagePreview = imgPreview.imagePreview;

// 自定义指令单独导出
export const drag = directives.drag; // 拖拽指令

// 单独导出工具
export const exportTableToExcel = utils.exportTableToExcel; // 表格导出excel
export const exportJsonToExcel = utils.exportJsonToExcel; // json导出excel

// 全局引入
export default {
    install,
};
