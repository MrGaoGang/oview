import Toast from "./Toast.vue";
import Vue from "vue";

let defaultParams = {
    duration: 1.5,
    message: "Hello uview！"
}
let instance;
let showToast = function (type, options) {
    instance = new Vue({
        render: h => {
            return h(Toast, {
                props: {
                    type,
                    ...options
                }
            })
        }
    }).$mount();

    document.body.appendChild(instance.$el);
}


export default {
    error(options = defaultParams) {
        showToast("error", options)
    },
    success(options = defaultParams) {
        showToast("success", options)
    },
    info(options = defaultParams) {
        showToast("info", options)
    }
}