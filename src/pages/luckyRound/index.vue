<template>
  <div id="lucky-round" class="normal-bg" :class="isX?'isX':''">
    <div class="nav-btn normal-bg" @click="routerFn('integralTask')"></div>
    <div class="notice-box">
      <van-swipe class="swipe-box" vertical :show-indicators="false" :autoplay="3000">
        <van-swipe-item v-for="item in noticeList" :key="item" class="swipe-item ellipse">
          {{item}}
          <span class="gift">{{item.prize}}</span>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="round-out-box" v-if="prizeData.length>0">
      <round-turntable
        ref="roundTurntable"
        :prizeData="prizeData"
        :rotateCircle="rotateCircle"
        :duringTime="duringTime"
        :turntableStyleOption="turntableStyleOption"
        @endRotation="endRotation"
        class="turntable"
      >
        <template slot="item" slot-scope="scope">
          <div class="turntable-img">
            <img :src="scope.item.prizeImg" />
          </div>
          <div class="turntable-name">
            <span
              class="ellipse turntable-name-span"
              :style="{color: scope.item.color}"
            >{{ scope.item.prizeName }}</span>
          </div>
        </template>
      </round-turntable>
      <div @click="startRotation" class="pointer"></div>
    </div>
    <div class="none-block"></div>
    <div class="line-item">
      <div>
        可用积分：{{roundInfo.integral}} |
        <span @click="routerFn('luckyHistory')">中奖记录</span>
      </div>
    </div>
    <div class="tip-box">
      <div class="tip tip-1">
        <div class="title">抽奖时间:</div>
        <div class="time-item">{{roundInfo.start_time}} - {{roundInfo.end_time}}</div>
      </div>
      <div class="tip tip-2">
        <div class="title">活动说明:</div>

        <div class="time-item" v-for="(item) in roundInfo.contentArr" :key="item">{{item}}</div>
      </div>
    </div>
    <div class="res-box" v-if="prizeRes.show">
      <van-dialog v-model="prizeRes.show" :title="prizeRes.title">
        <div class="no-get" v-if="prizeRes.type==3">抱歉您没有获奖,请多多参与活动</div>
        <div class="get-ticket" v-else>
          <p class="p1">
            获得了
            <span class="num">{{prizeRes.name}}</span>
          </p>
          <p class="p2">
            您可以在中奖记录中
            <span class="look" @click="lookPrize('luckyHistory')">点击查看</span>
          </p>
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import roundTurntable from "@/components/RoundCanvas";
import { mapGetters } from "vuex";
import { isIphoneX } from "@/utils/index";
import { getIsFirst, setIsFirst } from "@/utils/auth";
const ticket = require("../../assets/img/lucky/ticket_icon.png");
const integral = require("../../assets/img/lucky/integral_icon.png");
export default {
  name: "luckRound",
  components: {
    roundTurntable
  },
  computed: {
    ...mapGetters({}),
    isX() {
      let res = isIphoneX();
      return res;
    }
  },
  data() {
    return {
      show: false,
      prizeRes: {
        title: "温馨提示",
        show: false,
        type: 0 //0 优惠券 1积分 2实际物品 3谢谢惠顾
      },
      // 转盘上的奖品数据
      prizeData: [
        {
          id: 1,
          prizeName: "优惠券",
          color: "#FF6E6A",
          prizeImg: ticket
        },
        {
          id: 2,
          prizeName: "积分",
          color: "#ffffff",
          prizeImg: integral
        },
        {
          id: 3,
          prizeName: "优惠券",
          color: "#FF6E6A",
          prizeImg: ticket
        },
        {
          id: 4,
          prizeName: "积分",
          color: "#ffffff",
          prizeImg: integral
        },
        {
          id: 5,
          prizeName: "优惠券",
          color: "#FF6E6A",
          prizeImg: ticket
        },
        {
          id: 6,
          prizeName: "积分",
          color: "#ffffff",
          prizeImg: integral
        }
      ],
      // 转动的圈数
      rotateCircle: 6,
      // 转动需要持续的时间（s）
      duringTime: 4.5,
      // 转盘样式的选项
      turntableStyleOption: {
        // 背景色
        prizeBgColors: [
          "#ffb853",
          "#ffe250",
          "#ffb853",
          "#ffe250",
          "#ffb853",
          "#ffe250"
        ],
        // 转盘的外边框颜色
        borderColor: "#199301"
      },

      // 中奖的奖品的index
      prizeIndex: 0,
      // 用来锁定转盘，避免同时多次点击转动
      isLocking: false,

      //转盘信息
      roundInfo: {
        start_time: "",
        end_time: "",
        threshold_value: 50,
        content: "转盘赢奖品",
        contentArr: [],
        type: 0,
        name: "积分大转盘",
        integral: 0
      },
      noticeList: []
    };
  },
  mounted() {
    this.getRoundDetail();
    this.getNotice();
    
  },

  methods: {
    //获取详情
    async getRoundDetail() {
      let token = this.getCommonToken();

      let activity_id = this.getActivityId();
      let res = await this.$store.dispatch("iRoundInfo", {
        token,
        activity_id
      });

      if (res.status.succeed) {
        let result = res.data;
        this.setPrizeList(result.activity_content);
        result.contentArr = result.content.split("\n");
        this.roundInfo = {
          ...result
        };
      }
    },
    //组装奖品列表
    setPrizeList(priArray) {
      let result = [];
      priArray.forEach((item, index) => {
        let _item = {
          type: item.type,
          id: item.activity_content_id,
          prizeName: item.name,
          color: index % 2 == 0 ? "#FF6E6A" : "#ffffff",
          prizeImg: item.img_url
        };
        result.push(_item);
      });
      this.prizeData = result;
    },
    //开始转

    async startRotation() {
      let res = await this.canBeRotated();
      // 如果还不可以转动
      if (!res) {
        return false;
      }
      this.isLocking = true;
      let { prizeIndex = 0 } = this;
      // 告诉子组件，开始转动了
      this.$refs.roundTurntable.rotate(prizeIndex);
    },
    // 已经转动完转盘触发的函数
    endRotation() {
      let { prizeIndex } = this;
      let item = this.prizeData[prizeIndex];
      this.prizeRes = {
        title: item.type == 3 ? "谢谢参与" : "恭喜你~",
        show: true,
        type: item.type, //0 优惠券 1积分 2实际物品 3谢谢惠顾
        name: item.prizeName
      };
      //重新获取积分
      this.getRoundDetail();
      //限制点击太快
      setTimeout(() => {
        this.isLocking = false;
      }, 500);
    },
    // 判断是否可以转动
    async canBeRotated() {
      if (this.isLocking) {
        return false;
      }

      let { threshold_value, integral } = this.roundInfo;
      if (integral < threshold_value) {
        this.operationFn({
          type: "fail",
          message: "积分不足~"
        });
        return false;
      }
      let res = await this.beginRound();
      return res;
    },
    //调用接口判断是否可以转动
    async beginRound() {
      let token = this.getCommonToken();
      if (!token) {
        this.operationFn({
          type: "fail",
          message: "请先去登录再来~"
        });
        this.$bridge.callHandler('goLogin', 'goLogin', res => {
          console("获取app响应数据:" + res);
        });
        return;
      }
      let activity_id = this.getActivityId();
      
      let res = await this.$store.dispatch("iRoundBegin", {
        token,
        activity_id
      });
      if (res.status.succeed) {
        let { activity_content_id, activity_content_type } = res.data;
        let index = this.prizeData.findIndex(item => {
          return item.id == activity_content_id;
        });
        this.prizeIndex = index;
        return true;
      } else {
        this.operationFn({
          type: "fail",
          message: res.status.error_desc
        });
      }
      return false;
    },
    routerFn(path) {
      console.log(path)
      let token = this.getCommonToken();
      if (!token) {
        this.operationFn({
          type: "fail",
          message: "请先去登录再来~"
        });
        this.$bridge.callHandler('goLogin', 'goLogin', res => {
          console("获取app响应数据:" + res);
        });
        return;
      }
      //integralTask  luckyHistory
      if (path == "integralTask") {
        let host = window.location.host;
        let protocol = document.location.protocol;
        let msg = protocol +'//'+host+"/change?jieduVueUrl=integralTask";
        this.$bridge.callHandler('gointegralTask', msg, res => {
          console("获取app响应数据:" + res);
        });
      } else {
        this.commonRouterChange({
          path: "/" + path
        });
      }
    },
    lookPrize(path) {
      this.prizeRes.show = false;
      setTimeout(() => {
        this.routerFn(path);
      }, 200);
    },
    //获取公告
    async getNotice() {
      let activity_id = this.getActivityId();
      let res = await this.$store.dispatch("iRoundNotice", { activity_id });
      if (res.data) {
        this.noticeList = res.data;
      }
    }
  }
};
</script>

<style scoped lang="less">
/deep/ .van-dialog {
  border-radius: 10px;
}
</style>
