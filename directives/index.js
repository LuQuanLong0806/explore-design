/**
 * 该文件启用 `index.js` 导入所有 directives 模块。
 * 修改的时候只需添加按需导出的模块
 */
const files = require.context('./modules', true, /index\.js$/);
const directives = {};
files.keys().forEach(key => {
    directives[key.replace(/(\.\/|\/index|\.js)/g, '')] = files(key).default
});
export default directives; // 一次性导出
console.log('directives~', directives);

// 按需导出指令
export const drag = directives.drag;

