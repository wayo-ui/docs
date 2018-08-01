<template>
<div class="main main-components">
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