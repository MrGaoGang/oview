<template>
  <div>
    <p class="item-desc">普通的饼状图</p>
    <o-chart :data="data" :legend="legend">
      <o-pie position="name*percent"></o-pie>
    </o-chart>

    <p class="item-desc">有内圆半径的饼状图</p>
    <o-chart :data="data" :legend="legend">
      <o-pie :coord="coord" position="name*percent"></o-pie>
    </o-chart>

    <p class="item-desc">可点击的饼状图</p>
    <o-chart :data="data" :legend="legend">
      <o-pie
        :pie-label="pieLabel()"
        :coord="coord"
        position="name*percent"
      ></o-pie>
    </o-chart>
  </div>
</template>

<script>
import { Chart, Pie } from "../../../src/index.js";
import { PIE } from "../utils/data";
export default {
  components: {
    "o-chart": Chart,
    "o-pie": Pie,
  },
  data() {
    return {
      data: PIE.data,
      legend: {
        position: "top",
        align: "center", // align只有当position为top何bottom时有效
        //verticalAlign:"middle",
      },
      coord: {
        coordType: "polar",
        options: {
          transposed: true, // 坐标系翻转
          radius: 0.85,
          innerRadius: 0.618,
        },
      },
    };
  },
  methods: {
    pieLabel() {
      return {
        sidePadding: 30,
        activeShape: true,
        label1: function (data) {
          //第一个标签
          return {
            text: data.name,
            fill: "#343434",
            fontWeight: "bold",
          };
        },
        label2: function (data) {
          //第二个标签
          //如果不需要刻意删除label2
          return {
            text: data.percent * 100 + "%",
            fill: "#999",
          };
        },
        onClick: function (ev) {
          //点击之后显示
          var data = ev.data;
          if (data) {
            ev.chart.guide().clear();
            ev.chart.guide().html({
              position: ["50%", "50%"],
              html:
                '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" class="label1">' +
                data.name +
                '</p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" class="label2">' +
                data.percent * 100 +
                "%</p>\n      </div>",
            });
            ev.chart.repaint();
            // $('#title').text(data.type);
            // $('#money').text(data.money);
          }
        },
      };
    },
  },
  mounted() {
    setTimeout(() => {
      this.data = [
        {
          name: "芳华222",
          percent: 0.6,
        },
        {
          name: "妖猫传",
          percent: 0.2,
        },
        {
          name: "机器之血",
          percent: 0.18,
        },
        {
          name: "心理罪",
          percent: 0.15,
        },
        {
          name: "寻梦环游记",
          percent: 0.05,
        },
        {
          name: "其他",
          percent: 0.02,
        },
      ];
    }, 3000);
  },
};
</script>

<style>
</style>
