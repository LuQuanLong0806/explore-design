import Demo from "./src/index.vue";

const install = function (Vue) {
    Vue.component(Demo.name, Demo)
}

export default {
    install,
    Demo
}