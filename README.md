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
import iUi from "explore-design";
Vue.use(iUi);

// 按需引入
import "explore-design/dist/css/card.css";
import { Card } from "explore-design";
Vue.component("ex-card", Card);
```
