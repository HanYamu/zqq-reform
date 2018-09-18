import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ajaxLoading: false,
    transitionName: "false"
  },
  mutations: {
    setAjaxLoading(state, value) {
      state.ajaxLoading = value;
    },
    setTransitionName(state, value) {
      state.transitionName = value;
    }
  },
  actions: {},
  getters: {},
  modules: {},
  plugins: []
});
