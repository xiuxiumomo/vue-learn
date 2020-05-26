<template>
  <div id="app">
    <lay-out>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </lay-out>
  </div>
</template>

<script>
import LayOut from "@/layouts/index";
export default {
  name: "app",
  components: {
    LayOut
  }
};
</script>
<style lang="less">
@import "./assets/less/index";
#nprogress .bar {
  background: orange !important; //自定义颜色
}
</style>