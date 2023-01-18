import Vue from 'vue'
import App from './App.vue'

// explore-design 全局引入
import 'components/css/index.scss'
import exploreDesign from './../index.js';
Vue.use(exploreDesign);

// 组件按需引入
// import 'components/css/card.scss';
// import { Card } from 'components/index.js';
// Vue.component('ex-card', Card)
// import { imagePreview } from 'components/index.js';
// Vue.component('image-preview', imagePreview)

// 自定义指令按需引入
// import { drag } from 'directives/index.js';
// Vue.directive('drag', drag)

// 工具方法按需引入
import { exportJsonToExcel } from 'util/index.js';
Vue.prototype.$exportJsonToExcel = exportJsonToExcel;

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
}).$mount('#app')
