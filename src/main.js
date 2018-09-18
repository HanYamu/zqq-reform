import Vue from "vue";
import App from "./App.vue";
/* 引入路由 */
import router from "./router/router";
/* 引入vuex */
import store from "./store/store";
/* 引入样式 */
import "./style/index.less";
/* 引入过滤器 */
import "./filter/filter";
/* 引入vue全局混合 */
import "./mixins/mixin";
/* 引入localStorage */
import localStorage from "store";
Vue.prototype.$ls = localStorage;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
