## Image 图片

### 基础用法
```html
<wayo-image src="test.png"/>
```

### 占位图
即图片加载完成之前显示的图片，Wayo内置的占位图是搜狗地图的logo。

```html
<wayo-image src="test.png" placeholder="placeholder.png"/>
```

### 标签
图标的标签位于图片容器的底部。超出容器宽度的标签文案被隐藏，并且以`...`结尾。

```html
<wayo-image src="test.png" label="标签"/>
```

### 说明
说明是覆盖在图片底部黑色容器。

```html
<wayo-image src="test.png" info="说明"/>
```

### 自定义宽高
```html
<wayo-image src="test.png" :width="85" :height="75"/>
```

### 自定义等宽
如果只设置了`width`属性未设置`height`属性，则图片容器最终表现为一个边长为`width`的正方形。

```html
<wayo-image src="test.png" :width="85"/>
```

### 属性
<div class="table-box">

|参数|说明|类型|必填|可选值|默认值|
|:--|:--|:--|:--|:--|:--|
|src|图片url|string|是|-|-|
|width|宽度，单位`px`|number|否|-|70|
|height|高度，单位`px`|number|否|-|70|
|placeholder|占位图片url|string|否|-|-|
|label|标签文案|string|否|-|-|
|info|说明文案|string|否|-|-|
|border|显示边框|boolean|否|-|true|

</div>