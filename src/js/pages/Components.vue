<template>
<div class="main main-components">
  <markdown v-if="!!content" :content="content"></markdown>
  <demo :name="componentName"></demo>
</div>
</template>

<script>
import MixinDynamic from './_mixin-dynamic';
import Markdown from '../components/_markdown.vue';
import Demo from '../components/_demo.vue';

export default {
  mixins: [MixinDynamic],
  computed: {
    componentName(){
      return this.$route.params.name||'';
    }
  },
  components: {
    Demo,
    Markdown
  }
};
</script>

<style lang="scss">
@import '~@/styles/common.scss';
.main-components{
  @media screen and (min-width: $screen-width-hidedemo + 1px){
    padding-right: 400px !important;
  }
}
</style>