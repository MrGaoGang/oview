import Vue from "vue"
import App from './App.vue'
import oView from "../src/index.js";
import "font-awesome/css/font-awesome.css"
Vue.use(oView);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')