<template>
<div class="sidebar"
  :style="`${show?'left:0;':''}`">
  <sidebar-list :list="menulist"></sidebar-list>
  <div class="sidebar__action" @click="toggleSidebar"></div>
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
  computed: {
    show(){
      return this.$store.getters.ShowSideBar||false;
    }
  },
  methods: {
    toggleSidebar(){
      this.$store.dispatch('toggleSidebar');
    },
    closeSidebar(){
      this.$store.dispatch('toggleSidebar',false);
    }
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
  transition: all 0.2s ease-in-out;
  background-color: #fcfcfc;
  @media screen and (max-width: $screen-width-tablet){
    left: -100%;
    z-index: 11;
    .sidebar__action{
      display: block;
    }
  }
  &__action{
    display: none;
    background: url('../../assets/menu.png') no-repeat;
    background-size: 100% 100%;
    width: 35px;
    height: 35px;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 100;
    background-color: #fff;
    border: solid 1px #5f5f5f;
    @include border-radius(3px);
  }
}
</style>