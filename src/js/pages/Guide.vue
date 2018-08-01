<template>
<div class="main main-guide">
  <markdown v-if="!!content" :content="content"></markdown>
</div>
</template>

<script>
import MixinDynamic from './_mixin-dynamic';
import Markdown from '../components/_markdown.vue';
export default {
  mixins: [MixinDynamic],
  components: {
    Markdown
  }
};
</script>

<style lang="scss">
@import '~@/styles/common.scss';
.color-item{
  display: inline-block;
  width: 150px;
  height: 60px;
  color: #fff;
  position: relative;
  @include border-radius(4px);
  &__content{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
  }
}
</style>