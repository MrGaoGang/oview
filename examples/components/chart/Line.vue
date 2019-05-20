<template>
  <div>
    <div>
      <p class="item-desc">普通的折线图</p>
      <o-chart :data="normalData" :col-defs="normaColConfig" :tooltip="normalTootip">
        <o-line :axis="normaAxis" :position="'date*value'"></o-line>
      </o-chart>

      <p class="item-desc">光滑的的折线图</p>
      <o-chart :data="normalData" :col-defs="normaColConfig" :tooltip="normalTootip">
        <!-- 如果为line类型：shape可选为'line', 'smooth', 'dash'   dash：虚线，smooth： 平滑线 -->
        <o-line :axis="normaAxis" shape="smooth" :position="'date*value'"></o-line>
      </o-chart>

      <p class="item-desc">带点的折线图</p>
      <o-chart :data="pointData" :col-defs="pointColConfig" :tooltip="pointTootip">
        <o-line :axis="pointAxis" type="point" :position="'day*value'"></o-line>
      </o-chart>
      <!-- 如果为point类型：shape可选为'circle', 'hollowCircle', 'rect' 默认为 'circle'-->

      <p class="item-desc">光滑的带点折线图</p>
      <o-chart :data="pointData" :col-defs="pointColConfig" :tooltip="pointTootip">
        <o-line :axis="pointAxis" type="point" shape="smooth" :position="'day*value'"></o-line>
      </o-chart>

      <p class="item-desc">层叠的带点光滑折线图</p>
      <o-chart :data="mutiData" :col-defs="mutiColConfig" >
        <o-line is-area is-muti-line  type="point" shape="smooth" :position="'year*value'" color-field='country'></o-line>
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
        //提示信息
        custom: true,
        showXTip: true,
        showYTip: true,
        snap: true,
        crosshairsType: "xy",
        crosshairsStyle: {
          lineDash: [2]
        }
      },
      normaAxis: [
        //必须传入array类型
        {
          //对date坐标轴配置
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
        showCrosshairs: true,
        showItemMarker: false,
        onShow: function onShow(ev) {
          var items = ev.items;
          items[0].name = null;
          items[0].value = "$ " + items[0].value;
        }
      },
      pointAxis: [
        {
          fieldName: "day",
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

      mutiData: LINE.mutiLine,
      mutiColConfig: {
        year: {
          range: [0, 1]
        }
      }
    };
  }
};
</script>

<style>
</style>
