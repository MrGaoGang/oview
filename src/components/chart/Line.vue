<template></template>


<script>
import mixin from "./utils/mixin";
import { CHART_TYPE } from "./utils/constants";

export default {
  mixins: [mixin],
  props: {
    axis: {
      type: Object,
      default: function() {
        return {
          fieldName: null,
          config: {}
        };
      }
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
    }
  },
  mounted() {
    this.gotoChart(CHART_TYPE.line);
  }
};
</script>

<style>
</style>
