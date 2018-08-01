## 快速上手

### Node模块（推荐）
使用npm安装之后可以将Wayo作为Node的模块引入。

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
@import '~wayo/dist/wayo.min.css';
```

### CDN
```html
<html>
  <head>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/wayo/dist/wayo.min.css">
  </head>
  <body>
    <div id="app"></div>
    <!-- 引入组件库之前必须先引入vue -->
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/wayo/dist/wayo.min.js"></script>
    <script>
      new Vue({
        el: '#app',
        template: `<div>
          <wayo-button>Button</wayo-button>
        </div>`
      });
    </script>
  </body>
</html>
```