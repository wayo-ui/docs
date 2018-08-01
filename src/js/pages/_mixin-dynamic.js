export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    content(){
      if(!this.name){
        return '';
      }
      return require(`@/docs/${this.$route.name}/${this.name}.md`);
    }
  }
};