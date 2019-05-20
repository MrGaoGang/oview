<template></template>

<script>
import mixin from "./utils/mixin.js";
import { CHART_TYPE } from "./utils/constants";
export default {
  mixins: [mixin],
  props: {
    coord: {
      type: Object,
      default: function() {
        return {
          coordType: "rect",//默认为条形
          options: {
            transposed: false // 坐标系翻转
          }
        };
      }
    },
  
  },
  mounted() {
    this.gotoChart(CHART_TYPE.histogram);
  }
};
</script>

<style>
</style>
