import Toast from "./components/toast";
import Chart from "./components/chart/Chart.vue";
import Pie from "./components/chart/Pie.vue";

const oView = {
  Toast,
  Chart,
  Pie
};

const install = function(Vue) {
  if (install.install) {
    return;
  }

  Object.keys(oView).forEach(each => {
    Vue.component(each, oView[each]);
  });

  Vue.prototype.$toast = Toast;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const ALL = {
  install,
  ...oView
};

export { install, Pie, Chart, Toast };
export default ALL;
