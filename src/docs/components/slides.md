## Slides 幻灯片

### 基础用法
```html
<wayo-slides>
  <wayo-slide>1</wayo-slide>
  <wayo-slide>2</wayo-slide>
  <wayo-slide>3</wayo-slide>
</wayo-slides>
```

### 指示器类型
```html
<!-- 圆形（默认） -->
<wayo-slides indicator-type="circle">
  <wayo-slide>1</wayo-slide>
  <wayo-slide>2</wayo-slide>
  <wayo-slide>3</wayo-slide>
</wayo-slides>
<!-- 长条 -->
<wayo-slides indicator-type="square">
  <wayo-slide>1</wayo-slide>
  <wayo-slide>2</wayo-slide>
  <wayo-slide>3</wayo-slide>
</wayo-slides>
<!-- 隐藏 -->
<wayo-slides indicator-type="square">
  <wayo-slide>1</wayo-slide>
  <wayo-slide>2</wayo-slide>
  <wayo-slide>3</wayo-slide>
</wayo-slides>
```

### 循环切换
将Slides组件的`loop`属性设置为`true`则开启循环切换，实现类型走马灯的效果。

```html
<wayo-slides loop>
  <wayo-slide>1</wayo-slide>
  <wayo-slide>2</wayo-slide>
  <wayo-slide>3</wayo-slide>
</wayo-slides>
```

### 自动播放
将Slides组件的`autoplay`属性设置为`true`则开启自动播放，同时循环切换自动开启。

```html
<wayo-slides autoplay>
  <wayo-slide>1</wayo-slide>
  <wayo-slide>2</wayo-slide>
  <wayo-slide>3</wayo-slide>
</wayo-slides>
```

### 过渡动画类型
修改Slides组件的`animation`属性可选动画类型为`slide`-滑动(默认)、`fade`-渐隐以及`none`-无动画。

```html
<wayo-slides animation="fade">
  <wayo-slide>1</wayo-slide>
  <wayo-slide>2</wayo-slide>
  <wayo-slide>3</wayo-slide>
</wayo-slides>
```

### Slides 属性
<div class="table-box">

|参数|说明|类型|必填|可选值|默认值|
|:--|:--|:--|:--|:--|:--|
|initial-index|初始化展示的slide索引值|number|否|-|0|
|indicator-type|指示器类型|string|否|square/circle/none|circle|
|animation|动画类型|string|否|slide/fade/none|slide|
|loop|开启循环切换|boolean|否|-|false|
|autoplay|开启自动播放|boolean|否|-|false|
|interval|自动切换的时间间隔，单位`ms`。仅在自动播放模式下有效|否|number|-|3000|

</div>