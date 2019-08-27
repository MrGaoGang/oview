export default {
    width: Number,
    height: {
        type: Number,
        default: 300
    },
    chartConfig: {
        type: Object
    },
    backgroundColor: {
        type: String,
        default: "#fff"
    },
    //度量 Scale，是数据空间到图形空间的转换桥梁，负责原始数据到 [0, 1] 区间数值的相互转换工作。针对不同的数据类型对应不同类型的度量。
    scale: {
        type: Object
    },

    customRender: {
        //是否自定义render，类型有:prevent，完全自定义,extra：在已有渲染的基础上自定义
        type: String,
        default: null,
        valiator: function (val) {
            return [null, "prevent", "extra"].indexOf(val) != -1;
        }
    },

    legend: {
        //是否显示图例
        type: Object,
        default: function () {
            return {
                disable: true
            };
        }
    },

    tooltip: {
        //是否显示提示信息
        type: Object,
        default: function () {
            return {
                disable: true //默认不显示提示信息
            };
        }
    },
    data: {
        //数据源
        type: Array,
        required: true
    },
    //提供的数据源，每一个字段的配置

    colDefs: {
        type: Object,
        default: function () {
            return {};
        }
    },
    interaction: { //图表交互的配置
        type: [Object, Array],

    },
    //是否显示滚动条
    scrollBar: {
        type: Object,
        default: function () {
            return {}
        }
    },
    // 是否可左右滑动(快捷方式)
    showScrollX: {
        type: Boolean,
        default: false
    },

    // 是否可上下滑动（快捷方式）
    showScrollY: {
        type: Boolean,
        default: false
    },
}