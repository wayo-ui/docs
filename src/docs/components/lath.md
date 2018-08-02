## Lath 横幅

Wayo对Lath组件的定义为：
> 满宽的、具有一定语义的一个区域。与Block组件不同的是：Lath组件可以作为Block组件的一个条目，从语义的角度可以将其理解为Block语义的一个子集。

### 基础用法
```html
<wayo-block>
  <wayo-lath  border-bottom icon-position="top">
    <wayo-lath-header title="标题" subtitle="副标题"></wayo-lath-header>
    <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
    <wayo-lath-tail icon="arrow-right" label="打开"></wayo-lath-tail>
  </wayo-lath>
</wayo-block>
```

### 标题
可定义主标题和副标题

```html
<wayo-lath>
  <wayo-lath-header title="标题" subtitle="副标题" ></wayo-lath-header>
</wayo-lath>
```

### 内容
默认内容不超过3行，超出的部分隐藏并且显示“更多”标记。可以通过修改Lath-content组件的`content-line-limit`设置内容的最大行数限制。

> 行数限制功能只有将内容文案以`props`传入（即`:content="content"`）才可生效。通过slot定义的内容无此功能。

```html
<wayo-lath>
  <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
</wayo-lath>
```

### 图标
可以修改Lath组件的`icon`指定Wayo内置的图标，并且可以自定义颜色和位置。图标的位置默认是相对于Lath组件的垂直居中，修改`icon-position`为`top`则将使图标始终与主标题对齐。

```html
<wayo-lath icon="bus" icon-color="#ff0000" icon-position="top">
  <wayo-lath-header title="标题" subtitle="副标题" ></wayo-lath-header>
</wayo-lath>
```

### 尾部
Lath-tail位于Lath组件的最右侧且垂直居中，可定义图标、图标颜色和标签文案。

```html
<wayo-lath>
  <wayo-lath-tail icon="arrow-right" label="打开"></wayo-lath-tail>
</wayo-lath>
```

### 平铺布局
默认情况下，Lath组件是垂直布局，即Lath-header和Lath-content为块级元素，各占一行。将Lath组件的属性`inline`设置为`true`则将其布局模式改为平铺，即Lath-header、Lath-content以及Lath-tail水平排列。

```html
<wayo-lath icon="location" icon-position="top" inline>
  <wayo-lath-header title="标题" subtitle="副标题"></wayo-lath-header>
  <wayo-lath-content content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath-content>
  <wayo-lath-tail icon="arrow-right" label="打开"></wayo-lath-tail>
</wayo-lath>
```

### Lath 属性
<div class="table-box">

|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|icon|图标名称|string|Wayo内置图标|-|
|icon-color|图标颜色|string|-|-|
|icon-position|图标定位|string|middle/top|middle|
|border-bottom|下边框|boolean|-|false|
|border-top|上边框|boolean|-|false|
|inline|平铺布局|boolean|-|false|

</div>

### Lath-header 属性
<div class="table-box">

|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|title|主标题|string|-|-|
|subtitle|副标题|string|-|-|


</div>

### Lath-content 属性
<div class="table-box">

|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|content|内容文案|string|-|-|
|content-line-limit|行数显示|-|3|
|content-expand-label|超出行数显示时显示更多按钮的文案|string|-|更多|


</div>

### Lath-tail 属性
<div class="table-box">

|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|icon|图标名称|string|Wayo内置图标|-|
|icon-color|图标颜色|string|-|-|
|label|标签文案|string|-|-|

</div>