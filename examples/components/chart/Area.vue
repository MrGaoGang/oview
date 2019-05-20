<template>
  <div>
    <div>
      <p class="item-desc">基础面积图</p>
      <o-chart :data="normalData" :scale="normalScale" :tooltip="normalTootip">
        <o-area :axis="normaAxis" is-area position="time*tem"  shape="smooth"></o-area>
      </o-chart>

      <p class="item-desc">带负值面积图</p>
      <o-chart :data="fuzhiData" :col-defs="fuzhiConfig" :tooltip="normalTootip">
        <o-area :axis="fuzhiAxis" is-area position="month*value" shape="smooth"></o-area>
      </o-chart>

      <p class="item-desc">层叠面积图</p>
      <o-chart :data="mutiArea" :col-defs="mutiConfig" :legend="areaLegend">
        <o-area :axis="mutiAxis" is-area is-muti-line    position="date*value" color-field="city" ></o-area>
      </o-chart>
    </div>
  </div>
</template>

<script>
import { Chart, Line } from "../../../src/index.js";
import { AREA } from "../utils/data.js";
export default {
  components: {
    "o-chart": Chart,
    "o-area": Line
  },
  data() {
    return {
      normalData: AREA.normalData, //正常面积图的数据

      normalTootip: {
        //提示信息
        showCrosshairs: true
      },
      //坐标轴格外配置
      normaAxis: [
        //必须传入array类型
        {
          //对dtime坐标轴配置
          fieldName: "time",
          label: function(text, index, total) {
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
      //度量配置
      normalScale: {
        time: {
          range: [0, 1]
        },
        tem: {
          tickCount: 5,
          min: 0
        }
      },

      //带负值的数据
      fuzhiData: AREA.fuzhiData,
      fuzhiConfig: {
        month: {
          range: [0, 1]
        },
        value: {
          nice: false,
          min: -100,
          max: 100,
          tickCount: 5
        }
      },
      fuzhiAxis: [
        {
          fieldName: "month",
          line: null,
          label: function(text, index, total) {
            var textCfg = {};
            if (index === 0) {
              textCfg.textAlign = "left";
            } else if (index === total - 1) {
              textCfg.textAlign = "right";
            }
            return textCfg;
          }
        },
        {
          fieldName: "value",
          grid: function(text) {
            if (text === "0") {
              return {
                lineDash: null,
                lineWidth: 1
              };
            }
          }
        }
      ],

      //层叠面积图
      mutiArea: AREA.mutiArea,
      mutiConfig: {
        date: {
          range: [0, 1],
          type: "timeCat",
          mask: "MM-DD"
        },
        value: {
          max: 300,
          tickCount: 4
        }
      },
      mutiAxis: [
        {
          fieldName: "date",
          label: function(text, index, total) {
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
      areaLegend: { disable: false, fieldName: "city", align: "center" }
    };
  }
};
</script>

<style>
</style>
