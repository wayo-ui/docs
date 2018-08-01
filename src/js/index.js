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
    component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue')
  },{
    path: '/guide/:name',
    name: 'guide',
    props: true,
    component: () => import(/* webpackChunkName: "guide" */ './pages/Guide.vue')
  },{
    path: '/components/:name',
    name: 'components',
    props: true,
    component: () => import(/* webpackChunkName: "components" */ './pages/Components.vue')
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