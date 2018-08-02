## Flex 弹性布局
Flex组件是基于CSS FlexBox的一套封装方案。

### 栅格
Flex组件将外层容器的宽度(横向)或高度(纵向)平均分割为12个单元格。
```html
<wayo-flex-box>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
</wayo-flex-box>
<wayo-flex-box>
  <wayo-flex-cell :span="6"></wayo-flex-cell>
  <wayo-flex-cell :span="6"></wayo-flex-cell>
</wayo-flex-box>
<wayo-flex-box>
  <wayo-flex-cell :span="8"></wayo-flex-cell>
  <wayo-flex-cell :span="3"></wayo-flex-cell>
  <wayo-flex-cell :span="1"></wayo-flex-cell>
</wayo-flex-box>
```

### 对齐方式
#### 首对齐(默认)
对应`justify-content: flex-start;`

```html
<wayo-flex-box class="box" justify="start">
  <wayo-flex-cell :span="6" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell"></wayo-flex-cell>
</wayo-flex-box>
```

#### 尾对齐
对应`justify-content: flex-end;`

```html
<wayo-flex-box class="box" justify="end">
  <wayo-flex-cell :span="6" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell"></wayo-flex-cell>
</wayo-flex-box>
```

#### 居中对齐
对应`justify-content: center;`

```html
<wayo-flex-box class="box" justify="center">
  <wayo-flex-cell :span="6" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell"></wayo-flex-cell>
</wayo-flex-box>
```

#### 首尾对齐
**第一个子元素首对齐，最后一个子元素尾对齐，剩余空间均匀分配。**

对应`justify-content: space-between;`

```html
<wayo-flex-box class="box" justify="space-between">
  <wayo-flex-cell :span="6" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell"></wayo-flex-cell>
</wayo-flex-box>
```

#### 居中对齐，每个间隔均相等
**元素之间的间隔 = 第一元素与起点的间隔 = 最后一个元素与终点的间隔。**

对应`justify-content: space-evenly;`

```html
<wayo-flex-box class="box" justify="space-evenly">
  <wayo-flex-cell :span="3" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="3" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="3" class="cell"></wayo-flex-cell>
</wayo-flex-box>
```

#### 居中对齐，子元素间隔相等，首尾间隔相等
**元素之间的间隔/2 = 第一元素与起点的间隔 = 最后一个元素与终点的间隔。**

对应`justify-content: space-around;`

```html
<wayo-flex-box class="box" justify="space-around">
  <wayo-flex-cell :span="3" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="3" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="3" class="cell"></wayo-flex-cell>
</wayo-flex-box>
```

### 列间距
Flex-box的`gutter`属性可以指定子元素之间的精准间距，单位为`px`。

```html
<wayo-flex-box :gutter="20">
  <wayo-flex-cell :span="3" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="3" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="3" class="cell"></wayo-flex-cell>
</wayo-flex-box>
```

### 列偏移
设置Flex-cell的`offset`属性可以指定子元素据前一个元素的**偏移单元格个数**。

```html
<wayo-flex-box class="box">
  <wayo-flex-cell :span="6" :offset="4" class="cell"></wayo-flex-cell>
</wayo-flex-box>
<wayo-flex-box class="box">
  <wayo-flex-cell :span="6" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="3" :offset="2" class="cell"></wayo-flex-cell>
</wayo-flex-box>
<wayo-flex-box class="box">
  <wayo-flex-cell :span="4" :offset="1" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="4" :offset="2" class="cell"></wayo-flex-cell>
</wayo-flex-box>
```

### 纵向排列
设置Flex-box的`direction`的值为`column`即可纵向排列子元素。需要注意的是，由于CSS规范中容器的`height`是由子元素决定，并不能跟`width`一样自动占满父容器。所以启用纵向排列的同时，**需要设置具体的`height`值**，单位为`px`。

```html
<wayo-flex-box class="box" direction="column" :height="100">
  <wayo-flex-cell :span="8" class="cell"></wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell"></wayo-flex-cell>
</wayo-flex-box>
```

### 反向排列
横向和纵向均适用。
```html
<wayo-flex-box class="box" direction="row-reverse">
  <wayo-flex-cell :span="6" class="cell">1</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">2</wayo-flex-cell>
  <wayo-flex-cell :span="2" class="cell">3</wayo-flex-cell>
</wayo-flex-box>
<wayo-flex-box class="box" direction="column-reverse" :height="200">
  <wayo-flex-cell :span="6" class="cell">1</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">2</wayo-flex-cell>
  <wayo-flex-cell :span="2" class="cell">3</wayo-flex-cell>
</wayo-flex-box>
```

### 九宫格
开启Flex-box的`wrap`属性可以另超出容器宽度的子元素进行换行，合理设置可以实现九宫格的布局效果。

#### 横向
```html
<wayo-flex-box class="box" direction="row" :wrap="true">
  <wayo-flex-cell :span="4" class="cell">1</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">2</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">3</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">4</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">5</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">6</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">7</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">8</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">9</wayo-flex-cell>
</wayo-flex-box>
```

#### 纵向
```html
<wayo-flex-box class="box" direction="column" :wrap="true" :height="300">
  <wayo-flex-cell :span="4" class="cell">1</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">2</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">3</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">4</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">5</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">6</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">7</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">8</wayo-flex-cell>
  <wayo-flex-cell :span="4" class="cell">9</wayo-flex-cell>
</wayo-flex-box>
```

### Flex-box 属性
<div class="table-box">

|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|direction|方向|string|row/column/row-reverse/column-reverse|row|
|height|高度，仅纵向排列有效|number|-|-|
|justify|主轴对齐模式|string|unset/start/end/center/space-between/space-evenly/space-around|start|
|align|交叉轴对齐模式|string|unset/start/end/center/space-between/space-evenly/space-around|unset|
|wrap|是否自动换行|boolean|-|false|
|gutter|子元素间距|number|-|0|

</div>

### Flex-cell 属性
<div class="table-box">

|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|span|占据的单元格个数|number|-|-|
|offset|与前一个元素的间隔单元格个数|number|-|0|

</div>