<template>
<div class="navbar">
  <div class="navbar-logo">
    <img src="../../assets/logo.png" class="navbar-logo__img">
    <span class="navbar-logo__title">Wayo</span>
  </div>
  <div class="navbar-menu">
    <ul class="navbar-menu__list">
      <li class="navbar-menu__item">
        <a target="_blank" href="https://wayo-ui.github.io/">首页</a>
      </li>
      <li class="navbar-menu__item">
        <a target="_blank" href="https://github.com/wayo-ui/wayo/issues">bug反馈</a>
      </li>
      <li class="navbar-menu__item">
        <a target="_blank" href="https://github.com/wayo-ui/wayo">Github</a>
      </li>
    </ul>
  </div>
  <a href="./demo.html" class="nabvar-demo-link">查看Demo</a>
</div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import '~@/styles/common.scss';
.navbar{
  height: 60px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  z-index: 10;
  background-color: #f8f8f8;
  border-bottom: solid 1px #cccccc;
  @include selectDisable;
}
.navbar-logo{
  font-size: 1px;
  line-height: 1;
  position: absolute;
  left: 20px;
  top: 50%;
  @include transform(translateY(-50%));
  @media screen and (max-width: $screen-width-tablet){
    left: 50%;
    @include transform(translate(-50%,-50%));
  }
}
.navbar-logo__img{
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.navbar-logo__title{
  font-size: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  font-weight: 500;
}
.navbar-menu{
  position: absolute;
  right: 20px;
  top: 50%;
  @include transform(translateY(-50%));
  @media screen and (max-width: $screen-width-tablet){
    display: none;
  }
}

.navbar-menu__list{
  font-size: 1px;
  line-height: 1;
}
.navbar-menu__item{
  cursor: pointer;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px;
  &:hover{
    color: $color-primary;
  }
}
.nabvar-demo-link{
  display: none;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  @include transform(translateY(-50%));
  @media screen and (max-width: $screen-width-tablet){
    display: block;
  }
}
</style>