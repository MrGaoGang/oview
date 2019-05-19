<template></template>

<script>
import mixin from "./utils/mixin";
import { CHART_TYPE } from "./utils/constants";
export default {
  mixins: [mixin],
  props: {
 
    shape: {
      type: String,
      default() {
        return "circle";
      }
    }
  },
  mounted() {
    this.gotoChart(CHART_TYPE.point);
  }
};
</script>

<style>
</style>
