<template>
<div class="main main-guide">
  <markdown v-if="!!content" :content="content"></markdown>
</div>
</template>

<script>
import Markdown from './components/_markdown.vue';
export default {
  data(){
    return {

    };
  },
  computed: {
    content(){
      return require(`@/docs/guide/${this.$route.params.page}.md`);
    }
  },
  components: {
    Markdown
  }
};
</script>