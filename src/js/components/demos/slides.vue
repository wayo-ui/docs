<template>
<section class="demo-box">
  <p class="title">基础用法</p>
  <wayo-block>
    <wayo-slides autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>

  <p class="title">指示器类型</p>
  <wayo-block>
    <wayo-slides autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <wayo-block>
    <wayo-slides indicator-type="square" autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <wayo-block>
    <wayo-slides indicator-type="none" autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  
  <p class="title">fade动画</p>
  <wayo-block>
    <wayo-slides animation="fade" autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>

  <p class="title">无动画</p>
  <wayo-block>
    <wayo-slides animation="none" autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
</section>
</template>

<script>
export default {
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.slides__item{
  height: 80px;
  text-align: center;
  line-height: 80px;
  &-1{
    background-color: #6fa3f3;
  }
  &-2{
    background-color: #067ffa;
  }
  &-3{
    background-color: #48c6b0;
  }
}
</style>