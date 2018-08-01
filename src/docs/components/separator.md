## Separator 1像素分割线
separator是一条在任何设备上视觉效果均为1px的直线，可选水平和垂直方向，默认为水平。

### 使用方法
```html
<wayo-separator></wayo-separator>
```

### 属性
|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|direction|方向|string|row/column|row|
|height|高度，仅在direction=column时有效|number|-|-|
|color|颜色|string|-|#cccccc|
|absolute|绝对定位|boolean|-|false|