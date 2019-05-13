<template>
  <div
    :style="{
      backgroundColor: backgroundColor,
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <canvas ref="chart" height="300" class="noselect"></canvas>
    <slot></slot>
  </div>
</template>

<script>
import F2 from "@antv/f2/lib/index-all";
import { renderPie } from "./utils/utils.js";
import { CHART_TYPE, COLORS } from "./utils/constants.js";
const Util = F2.Util;
export default {
  props: {
    width: Number,
    height: {
      type: Number,
      default: 300
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    preventRender: {
      //是否自定义render
      type: Boolean,
      default: false
    },
    fieldName: {
      type: String,
      required: true
    },
    legend: {
      //是否显示图例
      type: Object,
      default: function() {
        return {
          disable: false,
          config: {}
        };
      }
    },
    colors: {
      //颜色的配置
      type: Array,
      default: function() {
        return COLORS;
      }
    },
    tooltip: {
      //是否显示提示信息
      type: Object,
      default: function() {
        return {
          disable: true, //默认不显示提示信息
          config: {}
        };
      }
    },
    data: {
      //数据源
      type: Array,
      required: true
    }
  },

  data() {
    return {
      chartType: "", //图表的类型
      datas: this.data
    };
  },
  watch: {
    data: {
      immediate: true,
      handler(val) {
        this.datas = val;
        if (this.chart != null) {
          this.changeData();
        }
      }
    }
  },
  computed: {
    chartData() {
      //图表的数据,如果Wie饼状图需要加上一个常量
      if (this.chartType == CHART_TYPE.pie) {
        return this.datas.slice().map(item => {
          item.data = "1";
          return item;
        });
      }
      return this.data;
    }
  },
  methods: {
    onTouchstart(e) {
      this.preventDefault && e.preventDefault();
    },
    changeData() {
      //修改数据
      this.chart.changeData(this.chartData);
    },
    repaint() {
      //重新绘制
      this.chart.repaint();
    },
    setChart(type, options) {
      if (this.preventRender) {
        this.$emit("on-render", { chart });
        return;
      }
      //根据不同类型，绘制不同的图形
      this.chartType = type;
      // this.render();
      //设置图形
      if (type == CHART_TYPE.pie) {
        renderPie(this.chart, this.colors, this.fieldName, options);
      }

      this.setLegend();
      this.setTooltip();

      this.chart.source(this.chartData);
      this.chart.render();
    },
    setLegend() {
      //设置图例
      if (this.legend) {
        if (!Util.isNil(this.legend.disable) && this.legend.disable) {
          this.chart.legend(false);
        } else {
          if (Util.isObject(this.legend.config)) {
            this.chart.legend(this.fieldName, this.legend.config);
          }
        }
      }
    },

    setTooltip() {
      //设置图例
      if (this.tooltip) {
        if (!Util.isNil(this.tooltip.disable)) {
          this.chart.tooltip(false);
        } else {
          if (Util.isObject(this.tooltip.config)) {
            this.chart.tooltip(this.tooltip.config);
          }
        }
      }
    },
    //渲染
    render() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let chart = new F2.Chart({
        el: this.$refs.chart,
        width: this.width || windowWidth,
        height: this.height ? this.height : 300,
        pixelRatio: this.$devicePixelRatio || window.devicePixelRatio
      });
      //如果需要自定义渲染表格的话
      if (this.preventRender) {
        this.$emit("on-render", { chart });
        return;
      }

      this.chart = chart;
    },
    reRender() {
      if (this.chart != null) {
        window.location.reload();
      }
    }
  },
  mounted() {
    this.render();
    window.addEventListener("resize", this.reRender);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.reRender);
  }
};
</script>

<style scoped>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>