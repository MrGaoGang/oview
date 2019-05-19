<template>
  <div>
    <p class="item-desc">普通的雷达图</p>
    <o-chart :data="normalData" :legend="normalLegend" :col-defs="normalColumnConfig">
      <o-radar :axis="normaAxis" position="item*score" color-field="user"></o-radar>
    </o-chart>

    <p class="item-desc">雷达面积图</p>
    <o-chart :data="normalData" :legend="normalLegend" :col-defs="normalColumnConfig">
      <o-radar
        :axis="normaAxis"
        is-area
        :animate="animate"
        position="item*score"
        color-field="user"
      ></o-radar>
    </o-chart>

    <p class="item-desc">自定义图标-雷达图</p>
    <o-chart
      :data="imageData"
      :col-defs="imageColumnConfig"
      custom-render="extra"
      :height="300"
      @on-render="onRender"
      :chart-config="chartConfig"
    >
      <o-radar :axis="imageAxis" is-area custom-define :animate="animate" position="item*score"></o-radar>
    </o-chart>
  </div>
</template>

<script>
import { Chart, Radar } from "../../../src/index.js";
import { RADAR } from "../utils/data.js";
export default {
  components: {
    "o-chart": Chart,
    "o-radar": Radar
  },
  data() {
    return {
      normalData: RADAR.normalData,

      normalLegend: {
        fieldName: "user",
        align: "center",
        itemWidth: null // 图例项按照实际宽度渲染
      },
      normaAxis: [
        {
          fieldName: "score",
          label: function label(text, index, total) {
            if (index === total - 1) {
              return null;
            }
            return {
              top: true
            };
          },
          grid: {
            lineDash: null,
            type: "arc" // 弧线网格
          }
        },
        {
          fieldName: "item",
          grid: {
            lineDash: null
          }
        }
      ],
      normalColumnConfig: {
        score: {
          min: 0,
          max: 120,
          nice: false,
          tickCount: 4
        }
      },
      animate: {
        //可以配置动效哦
        appear: {
          animation: "groupWaveIn",
          delay: 500 //延迟500s
        }
      },

      imageData: RADAR.imageData,
      imageColumnConfig: {
        score: {
          min: 0,
          max: 100
        }
      },
      imageAxis: [
        {
          fieldName: "score",
          label: null,
          grid: function grid(text) {
            if (text === "100") {
              return {
                lineDash: null
              };
            }
            return {
              lineWidth: 0
            };
          },
          line: null
        },
        {
          fieldName: "item",
          grid: {
            lineDash: null,
            top: true
          },
          label: null
        }
      ],
      //一些简单的配置
      chartConfig: {
        appendPadding: [30, 30, 30, 30] // 分别设置上、右、下、左画布预留边距
      }
    };
  },
  methods: {
    onRender({ chart }) {
      chart
        .area()
        .position("item*score")
        .style({
          fill: "r(0.45,0.55,0.15) 0:#fff 0.35:#DEF5F5 0.75:#C8EEEF 1:#A8E5E6",
          fillOpacity: 100
        });

      this.imageData.map(function(obj) {
        var offsetY =
          obj.item === "风险偏好" || obj.item === "风险承受能力" ? -10 : 0;
        chart.guide().html({
          position: [obj.item, 130],
          html:
            '<div style="width: 80px;height: 24px;text-align: center">' +
            '<img src="' +
            obj.img +
            '" style="width: 24px;height: 24px;" />' +
            '<div style="color: #808080;transform:scale(0.8, 0.8);font-size:12px;">' +
            obj.item +
            "</div>" +
            "</div></div>",
          offsetY: offsetY
        });
      });
    }
  }
};
</script>

<style>
</style>
