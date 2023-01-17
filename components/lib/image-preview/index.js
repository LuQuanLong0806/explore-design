import imagePreview from "./src/index.vue";

const install = function (Vue) {
    Vue.component(imagePreview.name, imagePreview)
}

export default {
    install,
    imagePreview
}