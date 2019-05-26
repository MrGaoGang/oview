<template></template>


<script>
import mixin from "./utils/mixin";
import { CHART_TYPE } from "./utils/constants";

export default {
  mixins: [mixin],
  props: {
    isArea: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default() {
        return "line";
      },
      validator: function(val) {
        return ["line", "point"].indexOf(val) != -1;
      }
    },

    shape: {
      type: String,
      default() {
        return "line";
      }
    },
    //默认显示空值
    showNulls: {
      type: Boolean,
      default: true
    },
    //是否存在多条线段
    isMutiLine: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.gotoChart(CHART_TYPE.line);
  }
};
</script>

<style>
</style>
