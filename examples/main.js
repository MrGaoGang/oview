import Vue from "vue"
import App from './App.vue'
import oView from "../src/index.js";

Vue.use(oView);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')