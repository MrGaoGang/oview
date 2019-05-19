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
    customDefine: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.gotoChart(CHART_TYPE.radar);
  }
};
</script>

<style>
</style>
