# i-ui123 组件库

### 快速开始

#### 1. 安装组建库

```bash
npm i i-ui123
```

#### 2. 引入组件库

```javascript
// 全部引入
import "i-ui123/dist/css/index.css";
import iUi from "i-ui123";
Vue.use(iUi);

// 按需引入
import "i-ui123/dist/css/card.css";
import { Card } from "i-ui123";
Vue.component("i-card", Card);
```
