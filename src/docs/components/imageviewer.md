## ImageViewer 图片预览
ImageViewer是Slides组件的一种应用场景。

### 基础用法
```html
<template>
<section class="demo-box">
  <wayo-image-viewer
    :value="imageList"
    :mask-color="maskColor"
    :mask-opacity="maskOpacity"
    @close="show=false"
    @change="onChange"></wayo-image-viewer>
</section>
</template>

<script>
export default {
  data() {
    return {
      maskColor: '#000000',
      maskOpacity: 0.6,
      watchChange: false,
      imageList: [
        'https://dimg02.c-ctrip.com/images/fd/tg/g1/M08/2A/B7/CghzflVQaLiAb42iAAEtDg7AQxQ346_C_604_394_Q90.jpg',
        'https://dimg02.c-ctrip.com/images/fd/tg/g1/M05/2A/B7/CghzflVQaLmAWMv0AAEyAoZKHLY067_C_604_394_Q90.jpg',
        'https://dimg01.c-ctrip.com/images/fd/tg/g1/M04/C8/42/CghzflWwuoKAIaTcACkS3IfJui4633_C_604_394_Q90.jpg'
      ]
    }
  },
  methods: {
    onChange(index){
      alert(`当前展示索引值:${index}`);
    }
  }
};
</script>
```

### 属性
<div class="table-box">

|参数|说明|类型|必填|可选值|默认值|
|:--|:--|:--|:--|:--|:--|
|value|图片列表|Array|是|-|-|
|indicator|是否显示指示器|boolean|否|-|true|
|mask-color|背景色|string|否|-|#000000|
|mask-opacity|背景透明度|number|否|-|0.6|

</div>