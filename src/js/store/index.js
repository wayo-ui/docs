import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const States = {
  showSideBar: false
};

const Getters = {
  ShowSideBar: states => states.showSideBar
};

const Actions = {
  toggleSidebar({commit,state},status){
    if(typeof status === 'boolean'){
      commit('TOGGLESIDEBAR',status);
    }else{
      commit('TOGGLESIDEBAR',!state.showSideBar);
    }
  }
};

const Mutations = {
  TOGGLESIDEBAR(state,status){
    state.showSideBar = status;
  }
};

export default new Vuex.Store({
  state: States,
  actions: Actions,
  getters: Getters,
  mutations: Mutations
});