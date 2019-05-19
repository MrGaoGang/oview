<template>
  <div>
    <div v-for="item in datas" :key="item.title" class="mobile-nav__item">
      <div class="cell">
        <router-link :to="item.router" class="title">{{item.title}}</router-link>
        <img class="icon" :src="item.img">
      </div>
    </div>
  </div>
</template>

<script>
const datas = [
  {
    title: "饼状图",
    img: require("./images/pie.png"),
    router: "/pie"
  },
  {
    title: "柱状图",
    img: require("./images/zhuzhuangtu.png"),
    router: "/histo"
  },
  {
    title: "折线图",
    img: require("./images/line.png"),
    router: "/line"
  },
  {
    title: "雷达图",
    img: require("./images/radar.png"),
    router: "/radar"
  },
  {
    title: "散点图/气泡图",
    img: require("./images/point.png"),
    router: "/point"
  }
];
export default {
  data() {
    return {
      datas: datas
    };
  }
};
</script>

<style >
.mobile-nav__item {
  margin-bottom: 16px;
}

.cell {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  padding: 10px 15px;
  align-items: center;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
}

.title {
  flex: 1;
  text-decoration: none;
  color: #323233;
}

.icon {
  height: 24px;
  width: 24px;
}
</style>
