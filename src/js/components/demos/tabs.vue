<template>
<section class="demo-box">
  <p class="title">基础用法</p>
  <wayo-tabs>
    <wayo-tab label="标签1" name="default_1">内容1</wayo-tab>
    <wayo-tab label="标签2" name="default_2">内容2</wayo-tab>
  </wayo-tabs>

  <p class="title">使用图标</p>
  <wayo-tabs>
    <wayo-tab label="标签1" icon="bus" name="default_1">内容1</wayo-tab>
    <wayo-tab label="标签2" icon="station" name="default_2">内容2</wayo-tab>
  </wayo-tabs>

  <p class="title">stripe风格</p>
  <wayo-tabs stripe align="center">
    <wayo-tab label="标签1" name="default_1">内容1</wayo-tab>
    <wayo-tab label="标签2" name="default_2">内容2</wayo-tab>
    <wayo-tab label="标签3" name="default_3">内容3</wayo-tab>
    <wayo-tab label="标签4" name="default_4">内容4</wayo-tab>
  </wayo-tabs>

  <p class="title">超出边界</p>
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
</section>
</template>

<script>
export default {};
</script>