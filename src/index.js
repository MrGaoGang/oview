import Toast from "./components/toast";
import Chart from "./components/chart/Chart.vue";
import Pie from "./components/chart/Pie.js";
import Histogram from "./components/chart/Histogram.js";
import Line from "./components/chart/Line.js";
import Radar from "./components/chart/Radar.js";
import Point from "./components/chart/Point.js";
import {INTERACTION_TYPE} from "./components/chart/utils/constants"


const oView = {
  Toast,
  Chart,
  Pie,
  Line,
  Histogram,
  Radar,
  Point,
  INTERACTION_TYPE
};

const install = function (Vue) {
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

export {
  install,
  Pie,
  Chart,
  Toast,
  Histogram,
  Line,
  Radar,
  Point,
  INTERACTION_TYPE
};
export default ALL;