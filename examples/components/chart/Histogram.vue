<template>
  <div>
    <p class="item-desc">普通的柱状图</p>
    <o-chart :data="data" :tooltip="tooltip" :position="'year*sales'" :fieldName="'year'">
      <o-histogram></o-histogram>
    </o-chart>

    <p class="item-desc">分组柱状图</p>
    <o-chart :data="groupData" :position="'月份*月均降雨量'" :fieldName="'name'">
      <o-histogram :adjust="adjust"></o-histogram>
    </o-chart>

    <p class="item-desc">层叠柱状图</p>
    <o-chart :data="groupData" :position="'月份*月均降雨量'" :fieldName="'name'">
      <o-histogram :adjust="ceAdjust"></o-histogram>
    </o-chart>

    <p class="item-desc">区间柱状图</p>
    <o-chart :data="betweenData" :tooltip="betweenTip" :position="'x*y'" :fieldName="'x'">
      <o-histogram></o-histogram>
    </o-chart>

    <p class="item-desc">基础条形图</p>
    <o-chart :data="data" :tooltip="tooltip" :position="'year*sales'" :fieldName="'year'">
      <o-histogram :coord="{options:{transposed: true}}"></o-histogram>
    </o-chart>
  </div>
</template>

<script>
import { Chart, Histogram } from "../../../src/index.js";
export default {
  components: {
    "o-chart": Chart,
    "o-histogram": Histogram
  },
  data() {
    return {
      // 普通柱状图数据
      data: [
        {
          year: "1951 年",
          sales: 38
        },
        {
          year: "1952 年",
          sales: 52
        },
        {
          year: "1956 年",
          sales: 61
        },
        {
          year: "1957 年",
          sales: 145
        },
        {
          year: "1958 年",
          sales: 48
        },
        {
          year: "1959 年",
          sales: 38
        },
        {
          year: "1960 年",
          sales: 38
        },
        {
          year: "1962 年",
          sales: 38
        }
      ],
      // 分组数据
      groupData: [
        {
          name: "London",
          月份: "Jan.",
          月均降雨量: 18.9
        },
        {
          name: "London",
          月份: "Feb.",
          月均降雨量: 28.8
        },
        {
          name: "London",
          月份: "Mar.",
          月均降雨量: 39.3
        },
        {
          name: "London",
          月份: "Apr.",
          月均降雨量: 81.4
        },
        {
          name: "London",
          月份: "May.",
          月均降雨量: 47
        },
        {
          name: "London",
          月份: "Jun.",
          月均降雨量: 20.3
        },
        {
          name: "London",
          月份: "Jul.",
          月均降雨量: 24
        },
        {
          name: "London",
          月份: "Aug.",
          月均降雨量: 35.6
        },
        {
          name: "Berlin",
          月份: "Jan.",
          月均降雨量: 12.4
        },
        {
          name: "Berlin",
          月份: "Feb.",
          月均降雨量: 23.2
        },
        {
          name: "Berlin",
          月份: "Mar.",
          月均降雨量: 34.5
        },
        {
          name: "Berlin",
          月份: "Apr.",
          月均降雨量: 99.7
        },
        {
          name: "Berlin",
          月份: "May.",
          月均降雨量: 52.6
        },
        {
          name: "Berlin",
          月份: "Jun.",
          月均降雨量: 35.5
        },
        {
          name: "Berlin",
          月份: "Jul.",
          月均降雨量: 37.4
        },
        {
          name: "Berlin",
          月份: "Aug.",
          月均降雨量: 42.4
        }
      ],
      // 区间柱状图数据
      betweenData: [
        {
          x: "分类一",
          y: [76, 100]
        },
        {
          x: "分类二",
          y: [56, 108]
        },
        {
          x: "分类三",
          y: [38, 129]
        },
        {
          x: "分类四",
          y: [58, 155]
        },
        {
          x: "分类五",
          y: [45, 120]
        },
        {
          x: "分类六",
          y: [23, 99]
        },
        {
          x: "分类七",
          y: [18, 56]
        },
        {
          x: "分类八",
          y: [18, 34]
        }
      ],
      // 普通数据的tip
      tooltip: {
        disable: false,
        config: {
          showItemMarker: false,
          onShow: function(ev) {
            var items = ev.items;
            items[0].name = null;
            items[0].name = items[0].title;
            items[0].value = "¥ " + items[0].value;
          }
        }
      },
      // 区间状图的tip
      betweenTip: {
        disable: false,
        config: {
          showItemMarker: false,
          onShow: function onShow(ev) {
            var items = ev.items;
            items[0].name = "范围";
            var value = items[0].value;
            items[0].value = value[0] + " 至 " + value[1];
          }
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
