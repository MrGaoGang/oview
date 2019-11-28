import Vue from "vue"
import App from './App.vue'
import oView from "../src/index.js";
Vue.use(oView);

import router from "./router/router";
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')