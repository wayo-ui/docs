## Stripe 条纹按钮
条纹按钮是一个包含多条信息的按钮。

### 基础使用
```html
<wayo-stripe>
  <wayo-stripe-button icon="cny">25</wayo-stripe-button>
  <wayo-stripe-button type="fill">预定</wayo-stripe-button>
</wayo-stripe>
```

### 尺寸
内置尺寸可选`small/default/large`。
```html
<!-- small -->
<wayo-stripe size="small">
  <wayo-stripe-button icon="cny">25</wayo-stripe-button>
  <wayo-stripe-button type="fill">预定</wayo-stripe-button>
</wayo-stripe>
<!-- default -->
<wayo-stripe size="default">
  <wayo-stripe-button icon="cny">25</wayo-stripe-button>
  <wayo-stripe-button type="fill">预定</wayo-stripe-button>
</wayo-stripe>
<!-- large -->
<wayo-stripe size="large">
  <wayo-stripe-button icon="cny">25</wayo-stripe-button>
  <wayo-stripe-button type="fill">预定</wayo-stripe-button>
</wayo-stripe>
```

### 禁用状态
```html
<wayo-stripe disabled>
  <wayo-stripe-button icon="cny">25</wayo-stripe-button>
  <wayo-stripe-button type="fill">预定</wayo-stripe-button>
</wayo-stripe>
```

### 自定义尺寸颜色
如果内置的尺寸和颜色不满足开发需求，可以定制其宽度、高度、字号和颜色。
```html
<wayo-stripe :width="80" :height="70" :font-size="18" color="#000000">
  <wayo-stripe-button icon="cny">25</wayo-stripe-button>
  <wayo-stripe-button type="fill">预定</wayo-stripe-button>
</wayo-stripe>
```

> stripe按钮仅包含一种颜色，`color`属性将影响`fill`按钮的字体颜色以及`stroke`按钮的背景颜色。

### 自由组合
虽然我们并不推荐在stripe按钮中使用多于2个button，但是我们并未作此限制，所以你可以自由发挥想象力进行组合。
```html
<wayo-stripe>
  <wayo-stripe-button icon="cny">25</wayo-stripe-button>
  <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  <wayo-stripe-button>买定离手</wayo-stripe-button>
</wayo-stripe>
```

### Stripe 属性
|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|size|尺寸|string|small/default/large|default|
|color|颜色|string|-|-|
|font-size|字体大小|number|-|-|
|width|宽度|number|-|-|
|height|高度|number|-|-|
|disabled|禁用状态|boolean|-|false|

### Stripe-button 属性
|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|type|类型|string|fill/stroke|stroke|
|icon|图标|string|Wayo内置图标|-|
