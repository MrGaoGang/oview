import VueRouter from "vue-router"
import Vue from "vue";
Vue.use(VueRouter);
const routes = [{
        path: '/',
        name: "Home",
        component: () => import("../components/Home")
    },
    {
        path: '/histo',
        name: "histo",
        component: () => import("../components/chart/Histogram")
    },
    {
        path: '/pie',
        name: "Pie",
        component: () => import("../components/chart/Pie")
    }, {
        path: '/line',
        name: "Line",
        component: () => import("../components/chart/Line")
    },
    {
        path: '/radar',
        name: "Radar",
        component: () => import("../components/chart/Radar")
    },
    {
        path: '/point',
        name: "Point",
        component: () => import("../components/chart/Point")
    },
    {
        path: '/area',
        name: "area",
        component: () => import("../components/chart/Area")
    }

]

export default new VueRouter({
    routes
})