import Vue from 'vue';
import Wayo from 'wayo';
import Demo from './pages/Demo.vue';

Vue.use(Wayo);


new Vue({
  el: '#app',
  template: `<demo/>`,
  components: {
    Demo
  }
});