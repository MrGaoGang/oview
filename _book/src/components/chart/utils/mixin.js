import {
    COLORS
} from "./constants"
import {
    getX
} from "./string"
export default {
    props: {
        position: {
            type: String,
            required: true
        },
        axis: {
            type: Array,
            default: function () {
                return [];
            }
        },
        colors: {
            //颜色的配置
            type: Array,
            default: function () {
                return COLORS;
            }
        },
        colorField: {
            //给哪个度量值设置颜色
            type: String
        },

        chartStyle: Object, //样式

        animate: Object, //动画

        size: { //大小
            type: Object,
            default: function () {
                return {
                    fieldName: null,
                    callback: function () {
                        return null;
                    }
                };
            }
        },
        //数据调整
        adjust: {
            type: Object,
            default: function () {
                return {
                    type:"stack"
                };
            }
        },

        options: Object, //一些额外的配置
    },

    methods: {
        gotoChart(type) {
            this.$nextTick(() => {
                this.$parent.setChart(type, Object.assign({}, this.$props));
            });
        }
    },

}