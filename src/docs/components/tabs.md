## Tabs 标签页

### 基础用法

```html
<wayo-tabs>
  <wayo-tab label="标签1" name="default_1">内容1</wayo-tab>
  <wayo-tab label="标签2" name="default_2">内容2</wayo-tab>
</wayo-tabs>
```

### 使用图标
```html
<wayo-tabs>
  <wayo-tab label="标签1" icon="bus" name="default_1">内容1</wayo-tab>
  <wayo-tab label="标签2" icon="station" name="default_2">内容2</wayo-tab>
</wayo-tabs>
```

### stripe风格
```html
<wayo-tabs stripe align="center">
  <wayo-tab label="标签1" name="default_1">内容1</wayo-tab>
  <wayo-tab label="标签2" name="default_2">内容2</wayo-tab>
  <wayo-tab label="标签3" name="default_3">内容3</wayo-tab>
  <wayo-tab label="标签4" name="default_4">内容4</wayo-tab>
</wayo-tabs>
```

### 超出边界
超出容器宽度的标签在切换至其前一个标签的同时会自动将超出部分的下一个相邻标签偏移至视野之内。

```html
<wayo-tabs>
  <wayo-tab label="标签1" name="default_1">内容1</wayo-tab>
  <wayo-tab label="标签2" name="default_2">内容2</wayo-tab>
  <wayo-tab label="标签3" name="default_3">内容3</wayo-tab>
  <wayo-tab label="标签4" name="default_4">内容4</wayo-tab>
  <wayo-tab label="标签5" name="default_5">内容5</wayo-tab>
  <wayo-tab label="标签6" name="default_6">内容6</wayo-tab>
  <wayo-tab label="标签7" name="default_7">内容7</wayo-tab>
  <wayo-tab label="标签8" name="default_8">内容8</wayo-tab>
</wayo-tabs>
```

### Tabs 属性
<div class="table-box">

|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|stripe|stripe风格|boolean|-|false|
|border-top|上边框|boolean|-|false|
|border-bottom|下边框|boolean|-|false|
|align|操作区的对齐规则|string|left/center/right|left|
|flex|操作区的每个标签的宽度绝对相等|boolean|-|false|

</div>

### Tab 属性
<div class="table-box">

|参数|说明|类型|必填|可选值|默认值|
|:--|:--|:--|:--|:--|:--|
|name|唯一名称|string|是|-|-|
|label|操作区文案|string|是|-|-|
|icon|图标|string|否|Wayo内置图标|-|

</div>