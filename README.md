# explore-design 组件库

### 快速开始

#### 1. 安装组建库

```bash
npm i explore-design
```

#### 2. 引入组件库

```javascript
// 全部引入
import "explore-design/dist/css/index.css";
import exploreDesign from "explore-design";
Vue.use(exploreDesign);

// 按需引入组件
import "explore-design/dist/css/card.css";
import { Card } from "explore-design";
Vue.component("ex-card", Card);

// 自定义指令按需引入
import { drag } from 'lib/index';
Vue.directive('drag', drag)

// 工具方法按需引入
import { exportJsonToExcel } from 'lib/index';
Vue.prototype.$exportJsonToExcel = exportJsonToExcel;
```
