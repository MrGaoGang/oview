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
    }
]

export default new VueRouter({
    routes
})