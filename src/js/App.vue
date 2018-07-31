<template>
<div class="window">
  <navbar/>
  <sidebar/>
  <router-view/>
</div>
</template>

<script>
import Sidebar from './components/sidebar.vue';
import Navbar from './components/navbar.vue';

export default {
  components: {
    Sidebar,
    Navbar
  }
};
</script>

<style lang="scss">
@import '~@/styles/common.scss';
</style>