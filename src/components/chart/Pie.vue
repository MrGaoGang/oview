<template>
  <div></div>
</template>

<script>
import { CHART_TYPE } from "./utils/constants";
export default {
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
    colors: Object, //颜色
    options: Object, //一些额外的配置
    pieLabel: {
      type: Object
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$parent.setChart(CHART_TYPE.pie, Object.assign({}, this.$props));
    });
  }
};
</script>

<style>
</style>
