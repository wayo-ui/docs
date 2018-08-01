<template>
<div class="sidebar">
  <sidebar-list :list="menulist"></sidebar-list>
</div>
</template>

<script>
import {SideBarList} from '@/js/constants';
import SidebarList from './_sidebar-list.vue';

export default {
  data(){
    return {
      menulist: [...SideBarList]
    };
  },
  components: {
    SidebarList
  }
};
</script>

<style lang="scss">
@import '~@/styles/common.scss';
.sidebar{
  position: absolute;
  top: 0;
  left: 0;
  padding: 80px 0 30px 15px;
  box-sizing: border-box;
  height: 100%;
  border-right: solid 1px #ccc;
  width: 230px;
  font-size: 14px;
  overflow: auto;
}
</style>