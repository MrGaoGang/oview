<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
body {
  background-color: #f2f3f5;
  color: #323233;
}

.item-desc{
  font-size: 16px;
  font-weight: bold;
  border-width: 0px;
  border-left: 10px solid #1890FF;
  padding-left: 10px;
}
</style>
