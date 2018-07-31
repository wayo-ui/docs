<template>
  <vue-markdown class="markdown-content">{{content}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import Prism from 'prismjs';

export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll();
    });
  },
  components: {
    VueMarkdown
  }
};
</script>