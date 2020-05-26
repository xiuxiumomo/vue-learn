<template>
  <div class="activity-about" ref="activityBox" :style="{bottom: dShow ? 0: '-600px'}">
    <div class="top-title">
      <div class="title">积分说明</div>
      <div class="icon normal-bg" @click="closeFn"></div>
    </div>
    <div class="word">
      <div class="qa-box">
        <p class="qa-tip">Q：积分有什么用途？</p>
        <p class="qa-tip">A：达到一定积分后可在街都APP上进行大转盘抽奖活动</p>
      </div>
      <div class="qa-box">
        <p class="qa-tip">Q：怎样获得积分？</p>
        <p class="qa-tip">A：目前获得积分的方式有以下5种途径：</p>
        <p class="qa-item">1.每天登录街都并成功签到，每天获取1积分，当连续签到第7天时会获得3个积分；</p>
        <p class="qa-item">2.推广街都APP来获取积分，当新用户通过你分享的二维码来下载注册街都APP，将会给你2积分的奖励，每天上限100积分；</p>
        <p class="qa-item">3.在街都上购物均可获得积分，特殊专区标识不可获得积分的商品除外，相应的积分会在订单确认收货后（手动/自动确认收货）由系统自动发放；</p>
        <p class="qa-item">4.评价已收货的订单，对商品好评并达到10字评论即可获得1积分，当订单默认好评时不获得积分；</p>
        <p class="qa-item">5.官方活动派发，具体以官方活动公告为主</p>
      </div>
      <div class="qa-box">
        <p class="qa-tip">Q：购物下单获得的积分是怎么计算的？</p>
        <p class="qa-tip">A：用户在下单购物的时候，收到商品且点击确认收货后，系统将自动发放积分，以实付金额（如发生运费，则需扣除，仅计算实付商品费用）计算20元=1分</p>
        <p class="qa-item">例如订单实付169.9元，减去其中运费10元后，商品部分实付金额为159.9元，则用户收到商品确认收货后，可获得7积分</p>
      </div>
      <div class="qa-box">
        <p class="qa-tip">Q：积分有有效期吗？</p>
        <p class="qa-tip">A：积分是有有效期的，积分有效期为发放当天至本年12月31号</p>
      </div>
      <div class="qa-box">
        <p class="qa-tip">Q：积分的获取和使用有什么限制？</p>
        <p
          class="qa-tip"
        >A：任何人通过不正当手段（包括但不限制于侵犯他人合法权益，作弊，扰乱系统，批量注册，用机器注册账号等方式）获取街都积分的，街都将有权冻结，撤销用户以此获得的积分并要求赔偿相关损失。</p>
      </div>
    </div>
    <div class="dis"></div>
  </div>
</template>
<script>
export default {
  name: "activity-about",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(data) {
      if (data) {
        this.dShow = true;
      }
    },
    dShow(data) {
      if (data==false) {
        this.$emit("update:show", false);
      }
    }
  },
  data() {
    return {
      dShow: false
    };
  },
  methods: {
    closeFn() {
      this.dShow = false;
    }
  }
};
</script>
<style lang="less" scoped>
.activity-about {
  background-color: #fff;
  width: 100%;
  height: 600px;
  border-radius: 20px 20px 0px 0px;
  transition: bottom ease-in-out 0.5s;
  padding: 30px;
  position: fixed;
  
  left: 0;
  right: 0;
  z-index: 999;
  .word {
    overflow-y: scroll;
    height: 500px;
    .qa-box {
      margin-bottom: 30px;
      p {
        line-height: 40px;
      }
      .qa-tip {
        color: #999;
        font-size: 24px;
      }
      .qa-item {
        color: #333;
        font-size: 24px;
      }
    }
  }
  .top-title {
    position: relative;
    height: 60px;
    .title {
      text-align: center;
      font-size: 30px;
      color: #000;
      font-weight: bold;
    }
    .icon {
      background-image: url("../../assets/img/sign/down.png");
      width: 35px;
      height: 16px;
      position: absolute;
      right: 30px;
      top: 20px;
    }
  }
  .dis {
    height: 40px;
  }
}
</style>