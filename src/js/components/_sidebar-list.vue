<template>
<div class="sidebar-list"
  :class="{
    'sidebar-list_sub': sub
  }">
  <span v-if="single" 
    class="sidebar-list__label sidebar-list__label_primary"
    :class="{
      'sidebar-list__label_activated': list[0].activated
    }"
    @click="goTo(list[0].route)">{{list[0].label}}</span>

  <div v-else v-for="(item,index) in list"
    class="sidebar-list__item"
    :key="`sidebar-list-item-${index}`">
    <span class="sidebar-list__label"
      :class="{
        'sidebar-list__label_primary': !sub||(sub&&item.sublist),
        'sidebar-list__label_activated': item.activated,
        'sidebar-list__label_active': item.route===$route.path
      }"
      @click="goTo(item.route)">{{item.label}}</span>
    <sidebar-list v-if="item.sublist&&item.sublist.length>0"
      :list="item.sublist"
      sub></sidebar-list>
  </div>

</div>
</template>

<script>
export default {
  name: 'SidebarList',
  props: {
    list: {
      type: Array,
      default: []
    },
    sub: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    single(){
      return this.list.length === 1;
    }
  },
  methods: {
    goTo(path){
      if(!path){
        return;
      }
      this.$router.push({path});
    }
  }
};
</script>

<style lang="scss">
@import '~@/styles/common.scss';
.sidebar-list {
  font-size: 12px;
  &_sub{
    font-size: 11px;
    padding-left: 0.8em;
  }
}
.sidebar-list__label{
  padding: 0.5em 0;
  line-height: 1;
  font-size: 1.2em;
  display: block;
  &_active{
    position: relative;
    &::after{
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background-color: $color-primary;
    }
  }
  &_primary{
    font-size: 1.25em;
    font-weight: 500;
  }
  &_activated{
    cursor: pointer;
    &:hover{
      color: $color-primary;
    }
  }
}
</style>