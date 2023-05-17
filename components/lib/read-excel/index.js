import ReadExcel from "./src/index.vue";

const install = function (Vue) {
    Vue.component(ReadExcel.name, ReadExcel)
}

export default {
    install,
    ReadExcel
}