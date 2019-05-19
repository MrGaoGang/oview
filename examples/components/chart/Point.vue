<template>
  <div>
    <p class="item-desc">散点图</p>
    <o-chart
      :data="pointData"
      :legend="legend"
      :col-defs="normalColumnConfig"
      :chart-config="chartConfig()"
    >
      <o-point
        :axis="normaAxis"
        position="height*weight"
        color-field="gender"
        :chart-style="{fillOpacity: 0.65}"
      ></o-point>
    </o-chart>

    <p class="item-desc">气泡图</p>
    <o-chart
      :data="bubbleData"
      :legend="legend"
      :col-defs="bubbleColConfig"
      :chart-config="chartConfig()"
      custom-render="extra"
      @on-render="onRender"
    >
      <o-point
        :axis="bubbleAxis"
        position="x*y"
        :chart-style="{fillOpacity: 0.65}"
        :size="sizeConfig()"
      ></o-point>
    </o-chart>
  </div>
</template>

<script>
import { Chart, Point } from "../../../src/index.js";
let POINT_DATA = require("../utils/point.json");
import { POINT } from "../utils/data";
import F2 from "@antv/f2";
export default {
  components: {
    "o-chart": Chart,
    "o-point": Point
  },
  data() {
    return {
      // 散点图
      pointData: POINT_DATA,
      normalColumnConfig: {
        height: {
          tickCount: 5
        },
        weight: {
          tickCount: 5
        }
      },
      normaAxis: [
        {
          fieldName: "height",
          label: function label(text, index, total) {
            var textCfg = {};
            if (index === 0) {
              textCfg.textAlign = "left";
            } else if (index === total - 1) {
              textCfg.textAlign = "right";
            }
            return textCfg;
          }
        }
      ],
      legend: {
        disable: false
      },

      // 气泡图
      bubbleData: POINT.bubbleData,
      bubbleColConfig: {
        x: {
          alias: "Daily fat intake", // 定义别名
          tickInterval: 5, // 自定义刻度间距
          nice: false, // 不对最大最小值优化
          max: 96, // 自定义最大值
          min: 62 // 自定义最小是
        },
        y: {
          alias: "Daily sugar intake",
          tickInterval: 50,
          nice: false,
          max: 165,
          min: 0
        },
        z: {
          alias: "Obesity(adults) %"
        }
      },
      bubbleAxis: [
        {
          fieldName: "x",
          label: function(text) {
            return {
              text: text + " gr" // 格式化坐标轴显示文本
            };
          },
          grid: {
            stroke: "#d9d9d9",
            lineWidth: 1,
            lineDash: [2, 2]
          }
        },
        {
          fieldName: "y",
          line: F2.Util.mix({}, F2.Global._defaultAxis.line, {
            top: false
          }),
          label: function(text) {
            if (text > 0) {
              return {
                text: text + " gr"
              };
            }
          }
        }
      ]
    };
  },
  methods: {
    chartConfig() {
      return {
        appendPadding: [20, 30, 20, 20] // 分别设置上、右、下、左画布预留边距
      };
    },
    sizeConfig() {
      return {
        fieldName: "z",
        callback: function(z) {
          return [10, 40];
        }
      };
    },
    onRender({ chart }) {
      this.bubbleData.map(function(item) {
        chart.guide().text({
          position: [item.x, item.y],
          content: item.name,
          style: {
            textAlign: "center",
            textBaseline: "middle",
            fill: "#1890FF"
          }
        });
      });
    }
  }
};
</script>

<style>
</style>
