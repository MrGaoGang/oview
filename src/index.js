import Toast from "./components/toast";
import Chart from "./components/chart/Chart";
import Pie from "./components/chart/Pie";


const oView = {
    Toast,
    Chart,
    Pie
};



const install = function (Vue) {
    if (install.install) {
        return;
    }

    Object.keys(oView).forEach(each => {
        Vue.component(each, oView[each])
    });

    Vue.prototype.$toast = Toast;

    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue);
    }
}

export default {
    install,
    ...oView
};