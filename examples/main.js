import Vue from 'vue'
import App from './App.vue'


// import Demo from '../components/lib/demo/src/index.vue';
// Vue.component('ex-demo', Demo); // Demo.install = >  Vue.component();

// import Demo from '../components/lib/demo/index.js';
// Vue.use(Demo)
// 按需引入
// import './../components/css/card.scss';
// import { Card } from './../components/lib/index.js';
// Vue.component('ex-card', Card)

// 全局引入
import './../components/css/index.scss'
import { drag } from '../components/lib/index';

Vue.directive( 'drag', drag )
// Vue.use(iUI)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
