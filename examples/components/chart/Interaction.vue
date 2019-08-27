
<template>
  <div>
    <p class="item-desc">折线图平移</p>
    <o-chart
      :data="scrollData"
      :col-defs="scrollConfig"
      :interaction="getScrollInteraction()"
      show-scroll-x
    >
      <o-line :position="'release*count'"></o-line>
    </o-chart>

    <p class="item-desc">柱状图平移</p>
    <o-chart
      :data="scrollData"
      :col-defs="hisDataConfig"
      show-scroll-x
      :interaction="getScrollInteraction()"
    >
      <o-histogram position="release*count"></o-histogram>
    </o-chart>

    <p class="item-desc">散点图平移和缩放</p>
    <o-chart :data="pointData" :interaction="getPointInteraction()" show-scroll-x show-scroll-y>
      <o-point
        position="Calories*Potassium"
        color-field="Manufacturer"
        :chart-style="{fillOpacity: 0.65}"
      ></o-point>
    </o-chart>

    <p class="item-desc">曲线图的横向平移缩放</p>
    <o-chart :data="lineData" show-scroll-x show-scroll-y :interaction="getLineInteraction()">
      <!-- 如果为line类型：shape可选为'line', 'smooth', 'dash'   dash：虚线，smooth： 平滑线 -->
      <o-line shape="smooth" position="x*y"></o-line>
    </o-chart>
  </div>
</template>

<script>
import scrollData from "../utils/line.json";
import hisData from "../utils/histo.json";
import pointData from "../utils/point2.json";

import { Chart, Line, Histogram, Point } from "../../../src/index.js";
import { LINE } from "../utils/data.js";
import { HISTOGRAM, getMockLineIntercation } from "../utils/data.js";

import { INTERACTION_TYPE } from "../../../src/index";
export default {
  components: {
    "o-chart": Chart,
    "o-line": Line,
    "o-histogram": Histogram,
    "o-point": Point
  },
  data() {
    return {
      // 可左右滑动的测试
      scrollData: scrollData,
      scrollConfig: {
        release: {
          min: 1990,
          max: 2010
        }
      },

      //   柱状图滑动
      hisDataConfig: {
        release: {
          min: 1990,
          max: 2000
        }
      },
      pointData: pointData,
      pointConfig: {
        Calories: {
          tickCount: 5
        },
        Potassiumt: {
          tickCount: 5
        }
      },

      lineData: getMockLineIntercation()
    };
  },
  methods: {
    getScrollInteraction() {
      return { type: INTERACTION_TYPE.pan };
    },
    getPointInteraction() {
      //多个情况可以传入数组
      return [
        {
          type: INTERACTION_TYPE.pan,
          mode: "xy"
        },
        {
          type: INTERACTION_TYPE.pinch,
          mode: "xy"
        }
      ];
    },
    getLineInteraction() {
      return [
        {
          type: INTERACTION_TYPE.pan,
          mode: "xy",
          limitRange: {
            x: {
              min: -100,
              max: 100
            }
          }
        },
        {
          type: INTERACTION_TYPE.pinch,
          mode: "xy",
          maxScale: 5,
          minScale: 1
        }
      ];
    }
  }
};
</script>

<style>
</style>