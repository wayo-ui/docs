<template>
<section class="demo-box">
  <p class="title">横向</p>
  <wayo-separator></wayo-separator>
  <wayo-separator color="red"></wayo-separator>
  <p class="title">纵向</p>
  <wayo-separator direction="column" :height="20"></wayo-separator>
  <wayo-separator direction="column" :height="20" color="red"></wayo-separator>
  <p class="title">绝对定位</p>
  <div class="absolute-box absolute-box_row">
    <wayo-separator color="red" absolute></wayo-separator>
  </div>
  <div class="absolute-box absolute-box_column">
    <wayo-separator color="red" absolute direction="column"></wayo-separator>
  </div>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.absolute-box{
  position: relative;
  &_row{
    width: 200px;
    height: 20px;
    margin: 0 auto;
  }
  &_column{
    height: 50px;
    text-align: center;
  }
}
</style>