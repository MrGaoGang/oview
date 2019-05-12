import VueRouter from "vue-router"
import Vue from "vue";
Vue.use(VueRouter);
const routes = [{
        path: '/',
        name: "Home",
        component: () => import("../components/Home")
    },
    {
        path: '/chart',
        name: "Chart",
        component: () => import("../components/Chart")
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