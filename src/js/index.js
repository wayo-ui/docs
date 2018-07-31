import '@/styles/index.scss';
import Vue from 'vue';
import VueRouter from 'vue-router'
import Wayo from 'wayo';
import App from './App.vue';

Vue.use(Wayo);
Vue.use(VueRouter);

const Router = new VueRouter({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './Home.vue')
  },{
    path: '/guide/:page',
    name: 'guide',
    component: () => import(/* webpackChunkName: "guide" */ './Guide.vue')
  },{
    path: '/components/:name',
    name: 'components',
    component: () => import(/* webpackChunkName: "components" */ './Components.vue')
  }]
});

new Vue({
  el: '#app',
  template: `<app></app>`,
  router: Router,
  components: {
    App
  }
});