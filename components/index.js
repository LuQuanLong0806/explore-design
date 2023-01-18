// 公共入口文件
// 引入组件
/**
 * 该文件启用 `index.js` 导入所有 components 模块。
 * 这个文件是一次性创建的，不应该被修改。
 */
const files = require.context('./lib', true, /\.js$/);
const components = {};
files.keys().forEach(key => {
    components[key.replace(/(\.\/|\/index|\.js)/g, '')] = files(key).default
});
console.log('components~', components);

export default components

// 组件模块单独导出
export const Card = components.card.Card;
export const Demo = components.demo.Demo;
export const imagePreview = components["image-preview"].imagePreview;
