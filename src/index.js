import Toast from "./components/toast";
import Chart from "./components/chart/Chart.vue";
import Pie from "./components/chart/Pie.vue";
import Histogram from "./components/chart/Histogram.vue";
import Line from "./components/chart/Line.vue";



const oView = {
  Toast,
  Chart,
  Pie,
  Line,
  Histogram
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

export { install, Pie, Chart, Toast,Histogram,Line };
export default ALL;
