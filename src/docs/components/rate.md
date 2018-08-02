## Rate 评分

### 基础用法
```html
<wayo-rate :score="4"/>
```

### 半星
对于不是整数的分值将显示半颗星。
```html
<wayo-rate :score="4.5"/>
```

### 显示分值
```html
<wayo-rate :score='3.2' :show-score="true"/>
```

### 分值label
```html
<wayo-rate :score='4.5' score-label="分" :show-score="true"/>
```

### 自定义颜色
可自定义前景色（点亮的星星）和背景色（未点亮的星星）。
```html
<wayo-rate :score='4' :show-score="true" chosen-color="#ff0000" unchosen-color="#000000"/>
```

### 自定义尺寸
```html
<wayo-rate :score='4' :show-score="true" :size="20" :label-size="30"/>
```

### 属性
<div class="table-box">

|参数|说明|类型|可选值|默认值|
|:--|:--|:--|:--|:--|
|max|最大值，即星星个数|number|-|5|
|score|分值|number|-|0|
|score-label|分值文案标签|string|-|-|
|size|星星的尺寸|number|-|14|
|label-size|分值文案尺寸，若未指定则与size值相等|number|-|-|
|show-score|是否显示分值|boolean|-|false|
|chosen-color|点亮星星的颜色|string|-|#ed5026|
|unchosen-color|未点亮星星的颜色|string|-|#d6d6d6|

</div>