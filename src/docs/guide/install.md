## 快速上手

### npm安装(推荐)
项目根目录下执行：

``` bash
npm install wayo --save-dev
```

#### 引入Wayo
```javascript
import Vue from 'vue';
import Wayo from 'wayo';

Vue.use(Wayo);
```

#### 引入style文件
可以在js文件中引入：
```javascript
import './node_modules/wayo/dist/wayo.min.css';
```

推荐在项目style文件中引入，比如在项目`style.scss`中添加如下代码：
```scss
@import './node_modules/wayo/dist/wayo.min.css';
```

### CDN引入
```html
<html>
  <head>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/wayo/dist/wayo.min.css">
  </head>
  <body>
    <!-- 引入组件库之前必须先引入vue -->
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/wayo/dist/wayo.min.js"></script>
  </body>
</html>
```

