import Vue from 'vue'
import App from './App.vue'


// 全局引入
import 'components/css/index.scss'
import exploreDesign from 'lib/index.js';
Vue.use(exploreDesign);

// 组件按需引入
// import 'components/css/card.scss';
// import { Card } from 'lib/index.js';
// Vue.component('ex-card', Card)

// 自定义指令按需引入
// import { drag } from 'lib/index';
// Vue.directive('drag', drag)

// 工具方法按需引入
// import { exportJsonToExcel } from 'lib/index';
// Vue.prototype.$exportJsonToExcel = exportJsonToExcel;


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
