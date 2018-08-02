## Showcase 展柜

### 基础用法
```html
<template>
  <wayo-showcase>
    <wayo-showcase-item v-for="(item,index) in list" 
      :key="`showcase-item-${index}`"
      :thumb="item.thumb">
       {{item.info}}
    </wayo-showcase-item>
  </wayo-showcase>
</template>
<script>
  export default {
    data(){
      return {
        list: [{
          thumb: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516062089.jpg',
          info: '第一个'
        },{
          thumb: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.jpg',
          info: '第二个'
        },{
          thumb: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522880251.jpg',
          info: '第三个'
        },{
          thumb: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2525528688.jpg',
          info: '第四个'
        },{
          thumb: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526297221.jpg',
          info: '第五个'
        },{
          thumb: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526767688.jpg',
          info: '第六个'
        }]
      };
    }
  };
</script>
```

### 自定义操作区背景
可以将背景修改颜色或者使用背景图片；

```html
<wayo-showcase nav-bg="#ff0000">
  <wayo-showcase-item v-for="(item,index) in list" 
    :key="`showcase-item-${index}`"
    :thumb="item.thumb">
     {{item.info}}
  </wayo-showcase-item>
</wayo-showcase>
<wayo-showcase :nav-bg="bgImg">
  <wayo-showcase-item v-for="(item,index) in list" 
    :key="`showcase-item-${index}`"
    :thumb="item.thumb">
     {{item.info}}
  </wayo-showcase-item>
</wayo-showcase>
```

### Showcase 属性
<div class="table-box">

|参数|说明|类型|必填|可选值|默认值|
|:--|:--|:--|:--|:--|:--|
|nav-bg|展览区背景|string|否|-|-|

</div>

### Showcase-item 属性
<div class="table-box">

|参数|说明|类型|必填|可选值|默认值|
|:--|:--|:--|:--|:--|:--|
|thumb|展览区图片url|string|是|-|-|

</div>