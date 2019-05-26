<template>
  <div></div>
</template>

<script>
import mixin from "./utils/mixin.js";
import {
    CHART_TYPE
} from "./utils/constants";
export default {
  mixins: [mixin],
  props: {
    coord: {
      type: Object,
      default: function() {
        return {
          coordType: "polar",
          options: {
            transposed: true // 坐标系翻转
          }
        };
      }
    },
    pieLabel: {
      type: Object
    }
  },
  mounted(){
    this.gotoChart(CHART_TYPE.pie)
  }
};
</script>

<style>
</style>
