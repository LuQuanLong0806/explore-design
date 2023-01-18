/* eslint-disable */
/**
 * 该文件启用 `index.js` 导入所有 util 模块。
 * 修改的时候只需添加按需导出的模块
 */
const files = require.context('./modules', true, /index\.js$/);
const utils = {};
files.keys().forEach(key => {
    utils[key.replace(/(\.\/|\/index|\.js)/g, '')] = files(key).default
});
export default utils; // 一次性导出
console.log('utils~', utils);

// 按需导出工具
export const exportJsonToExcel = utils["export-excel"].exportJsonToExcel;
export const exportTableToExcel = utils["export-excel"].exportTableToExcel;

