<template>
<div class="sidebar">
  <ul class="sidebar__list">
    <li class="sidebar__item ">
      <span class="sidebar__item-label sidebar__item-label_main activated">介绍</span>
    </li>

    <li class="sidebar__item ">
      <span class="sidebar__item-label sidebar__item-label_main">开发指南</span>
      <ul class="sidebar__sublist">
        <li class="sidebar__item ">
          <span class="sidebar__item-label activated">安装</span>
        </li>
        <li class="sidebar__item ">
          <span class="sidebar__item-label activated">快速上手</span>
        </li>
        <li class="sidebar__item">
          <span class="sidebar__item-label sidebar__item-label_main">规范</span>
          <ul class="sidebar__sublist">
            <li class="sidebar__item ">
              <span class="sidebar__item-label activated">色彩</span>
            </li>
            <li class="sidebar__item ">
              <span class="sidebar__item-label activated">字体</span>
            </li>
          </ul>
        </li>
      </ul>
    </li>

    <li class="sidebar__item">
      <span class="sidebar__item-label sidebar__item-label_main">组件</span>
      <ul class="sidebar__sublist">
        <li class="sidebar__item ">
          <span class="sidebar__item-label activated">Button 按钮</span>
        </li>
        <li class="sidebar__item ">
          <span class="sidebar__item-label activated">Card 卡片</span>
        </li>
      </ul>
    </li>

    <li class="sidebar__item ">
      <span class="sidebar__item-label sidebar__item-label_main activated">更新日志</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data(){
    return {
      
    };
  }
};
</script>

<style lang="scss">
@import '~@/styles/common.scss';
.sidebar{
  position: absolute;
  top: 0;
  left: 0;
  padding: 60px 15px 30px 15px;
  box-sizing: border-box;
  height: 100%;
  border-right: solid 1px #ccc;
  width: 230px;
  font-size: 14px;
}
.sidebar__list{
  margin-top: 50px;
}

.sidebar__item-label{
  line-height: 1;
  margin: 10px 0;
  display: inline-block;
  &_main{
    font-size: 15px;
    font-weight: 500;
  }
  &.active{
    color: $color-primary;
  }
  &.activated {
    cursor: pointer;
    &:hover{
      color: $color-primary;
    }
  }
}
.sidebar__sublist{
  padding-left: 10px;
}
</style>