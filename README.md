# explore-design 组件库

### 快速开始

#### 1. 安装组建库

```bash
npm i explore-design -S
```

#### 2. 引入组件库

```javascript

// 全部引入
import "explore-design/dist/css/index.css";
import exploreDesign from "explore-design";
Vue.use(exploreDesign);


// 按需引入组件
// 引入全局css
import "explore-design/dist/css/index.css";
// 或者引入相应的组件部分的css文件
import "explore-design/dist/css/card.css";
// 引入组件
// 方法一 直接解构
import { Card } from "explore-design";
// 方法二 单独引入组件文件
import { Card } from "explore-design/dist/lib/components.umd.js";
// 注册组件
Vue.component("ex-card", Card);


// 自定义指令和工具暂不支持直接解构
// 按需引入自定义指令
import { drag } from 'explore-design/dist/lib/directives.umd.js';
// 注册自定义指令
Vue.directive('drag', drag)


// 工具方法按需引入
import { exportJsonToExcel } from 'explore-design/dist/lib/util.umd.js';
// 将方法添加到原型上
Vue.prototype.$exportJsonToExcel = exportJsonToExcel;
this.$exportJsonToExcel();
// 也可以直接调用
exportJsonToExcel()
```
