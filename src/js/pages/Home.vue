<template>
<div class="main main-home">
  <div class="home-showcase">
    <img src="../../assets/logo.png" class="home-showcase__img">
  </div>
  <div class="home-info">
    <p class="home-info__title">Wayo</p>
    <p class="home-info__subtitle">轻量的移动端Vue组件库</p>
  </div>
</div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
@import '~@/styles/common.scss';
.home-showcase{
  text-align: center;
  line-height: 1;
  margin-top: 100px;
}
.home-showcase__img{
  width: 200px;
}
.home-info{
  text-align: center;
}
.home-info__title{
  font-size: 24px;
  margin: 10px;
}
</style>