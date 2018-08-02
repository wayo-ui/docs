## Tag 标签

### 类型
Tag类型分为无语义类型（默认）和语义类型（即有状态的类型）。

```html
<!-- default -->
<wayo-tag>default</wayo-tag>
<!-- primary -->
<wayo-tag type="primary">primary</wayo-tag>
<!-- info -->
<wayo-tag type="info">info</wayo-tag>
<!-- success -->
<wayo-tag type="success">success</wayo-tag>
<!-- warning -->
<wayo-tag type="warning">warning</wayo-tag>
<!-- danger -->
<wayo-tag type="danger">danger</wayo-tag>
```

### 尺寸

```html
<!-- default -->
<wayo-tag>default</wayo-tag>
<!-- large -->
<wayo-tag size="large">large</wayo-tag>
<!-- small -->
<wayo-tag size="small">small</wayo-tag>
<!-- mini -->
<wayo-tag size="mini">mini</wayo-tag>
```

### 圆角

```html
<wayo-tag type="primary" round>primary</wayo-tag>
```

### 描边
与Button的描边模式一致。

```html
<wayo-tag outline>default</wayo-tag>
<wayo-tag type="primary" outline>primary</wayo-tag>
<wayo-tag type="info" outline>info</wayo-tag>
<wayo-tag type="success" outline>success</wayo-tag>
<wayo-tag type="warning" outline>warning</wayo-tag>
<wayo-tag type="danger" outline>danger</wayo-tag>
```

### 自定义颜色&尺寸
```html
<!-- 背景色&字体颜色 -->
<wayo-tag bg-color="#000000" text-color="#d82c2c">tag</wayo-tag>
<!-- 高度和宽度 -->
<wayo-tag :width="70" :height="30">tag</wayo-tag>
```

### 属性
<div class="table-box">

|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|type|类型|string|default/primary/info/warning/danger|default|
|size|内置尺寸|string|mini/small/default/|default|
|outline|描边按钮|boolean|-|false|
|round|圆边按钮|boolean|-|false|
|bg-color|背景颜色|string|-|-|
|text-color|字体颜色|string|-|-|
|width|宽度|string|-|-|
|height|高度|string|-|-|

</div>