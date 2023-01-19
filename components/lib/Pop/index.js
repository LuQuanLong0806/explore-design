 /* eslint-disable */
import Pop from './src/index.vue';

const install = (Vue) => {
    // 扩展
    const PopComponent = Vue.extend(Pop);
    // 实例化
    const instance = new PopComponent();
    // 创建根元素
    instance.$mount(document.createElement('div'));
    // 挂载到body上面
    document.body.appendChild(instance.$el);
    // 添加原型可以通过 this 调用
    Vue.prototype.$pop = (msg, type) => {
        // 定义组件里的一些属性
        instance.type = type;
        instance.msg = msg;
        instance.isShow = true; // 让组件显示
    }
}

export default {
    install,
    Pop
}