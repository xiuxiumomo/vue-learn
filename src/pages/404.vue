<template>
  <div id="no-fond">
    <img src="../assets/img/404.png" alt />
    <p>哎呦，登录信息有误~</p>
    <div style="margin-top: 20px;">
      <van-button type="info" @click="goLogin">重新登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "error-page",
  mounted(){},
  methods: {
    goLogin() {
      let msg = "goLogin";
      this.$bridge.callHandler(msg, msg, res => {
        console("获取app响应数据:" + res);
      });
    }
    
  }
};
</script>
<style lang="less">
#no-fond {
  height: 100vh;
  color: #666;
  font-size: 28px;
  text-align: center;
  background: #f7f7f7;
  img {
    display: block;
    margin: 0 auto;
    padding-top: 304px;
    margin-bottom: 30px;
    width: 323px;
  }
}
</style>
