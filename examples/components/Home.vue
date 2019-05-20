<template>
  <div>
    <div class="header">
      <img src="./images/logo.png">
      <span>oview 移动端图表库</span>
    </div>

    <p class="desc">oview是基于F2封装的一套Vue移动端图表库。</p>
    <div v-for="item in datas" :key="item.title" class="mobile-nav__item">
      <div class="cell">
        <router-link :to="item.router" class="title">{{item.title}}</router-link>
        <img class="icon" :src="item.img">
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
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
  },
   {
    title: "面积图",
    img: require("./images/area.png"),
    router: "/area"
  }
];
export default {
  data() {
    return {
      datas: datas
    };
  },
  components: {
    Logo
  }
};
</script>

<style scoped>
.header {
  font-size: 26px;
  font-weight: 500;
  margin-left: 15px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

.header img {
  width: 36px;
  height: 28px;
  margin-right: 20px;
}
.desc {
  font-size: 14px;
  color: #7d7e80;
  margin: 10px 20px 30px 40px;
}
</style>

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
