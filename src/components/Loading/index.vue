<template>
  <div class="out-box">
    <div class="main">
      <div class="wave">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
      <div class="innerText">加载中...</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-loading",
  mounted() {
    this.goOther();
  },
  methods: {
    goOther() {
      let query = this.$route.query;
      
      // setTimeout(() => {
      //   this.commonRouterChange({
      //     path: "/integralTask"
      //   });
      // }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
.out-box {
  height: 100vh;
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .innerText {
      font-size: 28px;
      color: #ff8c1e;
    }
  }
}
.wave {
  min-width: 60px;
  min-height: 60px;
  width: 100px;
  height: 80px;
}
.wave > div {
  background-color: #ff8c1e;
  min-height: 60px;
  height: 100%;
  width: 10%;
  margin-left: 10%;
  display: inline-block;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
.wave .rect2 {
  -webkit-animation-delay: -1.1s;
  -moz-animation-delay: -1.1s;
  -o-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.wave .rect3 {
  -webkit-animation-delay: -1s;
  -moz-animation-delay: -1s;
  -o-animation-delay: -1s;
  animation-delay: -1s;
}
.wave .rect4 {
  -webkit-animation-delay: -0.9s;
  -moz-animation-delay: -0.9s;
  -o-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.wave .rect5 {
  -webkit-animation-delay: -0.8s;
  -moz-animation-delay: -0.8s;
  -o-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>