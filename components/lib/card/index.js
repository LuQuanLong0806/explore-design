import Card from "./src/index.vue";

const install = function (Vue) {
    Vue.component(Card.name, Card)
}

export default {
    install,
    Card
}