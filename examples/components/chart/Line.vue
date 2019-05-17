<template>
  <div>
    <div>
      <p class="item-desc">普通的折线图</p>
      <o-chart
        :data="normalData"
        :col-defs="normaColConfig"
        :position="'date*value'"
        :tooltip="normalTootip"
      >
        <o-line :axis="normaAxis"></o-line>
      </o-chart>

      <p class="item-desc">光滑的的折线图</p>
      <o-chart
        :data="normalData"
        :col-defs="normaColConfig"
        :position="'date*value'"
        :tooltip="normalTootip"
      >
        <!-- 如果为line类型：shape可选为'line', 'smooth', 'dash'   dash：虚线，smooth： 平滑线 -->
        <o-line :axis="normaAxis" shape="smooth"></o-line>
      </o-chart>

      <p class="item-desc">带点的折线图</p>
      <o-chart
        :data="pointData"
        :col-defs="pointColConfig"
        :position="'day*value'"
        :tooltip="pointTootip"
      >
        <o-line :axis="pointAxis" type="point"></o-line>
      </o-chart>
      <!-- 如果为point类型：shape可选为'circle', 'hollowCircle', 'rect' 默认为 'circle'-->

      <p class="item-desc">光滑的带点折线图</p>
      <o-chart
        :data="pointData"
        :col-defs="pointColConfig"
        :position="'day*value'"
        :tooltip="pointTootip"
      >
        <o-line :axis="pointAxis" type="point" shape="smooth"></o-line>
      </o-chart>
    </div>
  </div>
</template>

<script>
import { Chart, Line } from "../../../src/index.js";
import { LINE } from "../utils/data.js";
export default {
  components: {
    "o-chart": Chart,
    "o-line": Line
  },
  data() {
    return {
      normalData: LINE.lineNormal, //正常折线图的数据
      normaColConfig: {
        //对每个字段配置
        //正常的折线图每一个字段的配置
        value: {
          tickCount: 5, //坐标点的个数
          min: 0
        },
        date: {
          type: "timeCat", //时间类型
          range: [0, 1],
          tickCount: 3 //坐标点的个数
        }
      },
      normalTootip: {
        disable: false,
        config: {
          //提示信息
          custom: true,
          showXTip: true,
          showYTip: true,
          snap: true,
          crosshairsType: "xy",
          crosshairsStyle: {
            lineDash: [2]
          }
        }
      },
      normaAxis: {
        //对坐标轴配置
        fieldName: "date",
        config: {
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
      },

      //带点的折线图数据
      pointData: LINE.pointLine,
      //带点的折线图x,y轴数据配置
      pointColConfig: {
        value: {
          tickCount: 5,
          min: 0
        },
        day: {
          range: [0, 1]
        }
      },
      //提示信息
      pointTootip: {
        disable: false,
        config: {
          showCrosshairs: true,
          showItemMarker: false,
          onShow: function onShow(ev) {
            var items = ev.items;
            items[0].name = null;
            items[0].value = "$ " + items[0].value;
          }
        }
      },
      pointAxis: {
        fieldName: "day",
        config: {
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
      }
    };
  }
};
</script>

<style>
</style>
