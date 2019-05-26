<template>
  <div>
    <p class="item-desc">普通的柱状图</p>
    <o-chart :data="data" :tooltip="tooltip">
      <o-histogram position="year*sales"></o-histogram>
    </o-chart>

    <p class="item-desc">分组柱状图</p>
    <o-chart :data="groupData">
      <o-histogram :adjust="adjust" position="月份*月均降雨量" :color-field="'name'"></o-histogram>
    </o-chart>

    <p class="item-desc">层叠柱状图</p>
    <!-- 不设置color field默认为x轴的 -->
    <o-chart :data="groupData" >
      <o-histogram :adjust="ceAdjust" position="月份*月均降雨量" color-field="name"></o-histogram>
    </o-chart>

    <p class="item-desc">区间柱状图</p>
    <o-chart :data="betweenData" :tooltip="betweenTip">
      <o-histogram position="x*y"></o-histogram>
    </o-chart>

    <p class="item-desc">基础条形图</p>
    <o-chart :data="data" :tooltip="tooltip">
      <o-histogram :coord="{options:{transposed: true}}" position="year*sales"></o-histogram>
    </o-chart>
  </div>
</template>

<script>
import { Chart, Histogram } from "../../../src/index.js";

import { HISTOGRAM } from "../utils/data.js";
export default {
  components: {
    "o-chart": Chart,
    "o-histogram": Histogram
  },
  data() {
    return {
      // 普通柱状图数据
      data: HISTOGRAM.normalData,
      // 分组数据
      groupData: HISTOGRAM.groupData,
      // 区间柱状图数据
      betweenData: HISTOGRAM.betweenData,
      // 普通数据的tip
      tooltip: {
        showItemMarker: false,
        onShow: function(ev) {
          var items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = "¥ " + items[0].value;
        }
      },
      // 区间状图的tip
      betweenTip: {
        showItemMarker: false,
        onShow: function(ev) {
          var items = ev.items;
          items[0].name = "范围";
          var value = items[0].value;
          items[0].value = value[0] + " 至 " + value[1];
        }
      },
      adjust: {
        //分组柱状图配置
        type: "dodge",
        marginRatio: 0.05 // 设置分组间柱子的间距
      },
      ceAdjust: {
        //层叠柱状图配置
        type: "stack"
      }
    };
  }
};
</script>

<style>
</style>
