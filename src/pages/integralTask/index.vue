<template>
  <div id="integer-task">
    <div class="top-bg normal-bg">
      <div style="height: 20px;"></div>
      <div class="userInfo flex-box">
        <div class="left-info flex-box">
          <div class="avatar">
            <img :src="detailInfo.avatar_img" alt />
          </div>
          <div class="integer ellipse">我的积分：{{detailInfo.integral}}</div>
        </div>
        <div class="right-icon" @click="aboutShow=true">
          <img src="../../assets/img/sign/question_icon.png" alt />
        </div>
      </div>
    </div>
    <div class="sign-box">
      <div class="title">签到拿积分</div>
      <div class="sign-list flex-box">
        <div
          class="item"
          v-for="(item,index) in data"
          :key="item.id"
          :class="item.isSign?'active':''"
        >
          <div
            class="icon normal-bg"
            :style="{backgroundImage: 'url('+(item.isSign?item.activeImg:item.iconImg)+')'}"
          >
            <span v-show="item.isSign==false" class="num" >+{{item.num}}</span>
          </div>
          <div class="day" :class="item.isSign?'active':''">第{{index+1}}天</div>
        </div>
      </div>
      <div class="sign-btn normal-bg" v-if="detailInfo.is_checkin==0" @click="getSign">签到</div>
      <div v-else class="sign-btn sign-btn-end normal-bg">加油！已连续签到{{detailInfo.continue_number}}天</div>
    </div>
    <div class="task-box">
      <div class="title">积分任务</div>
      <div class="list-box">
        <div class="item flex-box">
          <div class="flex-box">
            <div class="icon">
              <img src="../../assets/img/sign/sign_icon.png" class="img-1" />
            </div>
            <div class="text-1">
              <p class="text-title">今日签到</p>
            </div>
          </div>

          <div class="right flex-box">
            <div class="tip">积分+1</div>
            <div class="btn liner-bg" v-if="detailInfo.is_checkin==0">去签到</div>
            <div class="btn btn-signed normal-bg" v-else>已完成</div>
          </div>
        </div>

        <div class="item flex-box">
          <div class="flex-box">
            <div class="icon">
              <img src="../../assets/img/sign/share_icon.png" class="img-2" />
            </div>
            <div class="text-1">
              <p class="text-title">分享街都  <span class="share-num">({{detailInfo.share_num}}/50)</span></p>
              <p class="tip">好友注册成功后可获赠积分2</p>
            </div>
          </div>

          <div class="right flex-box">
            <div class="tip">积分+2</div>
            <div class="btn liner-bg" @click="goShare">去分享</div>
          </div>
        </div>
        <div class="item flex-box">
          <div class="flex-box">
            <div class="icon">
              <img src="../../assets/img/sign/order_icon.png" class="img-3" />
            </div>
            <div class="text-1">
              <p class="text-title">确认订单</p>
              <p class="tip">每20元可获得1积分</p>
            </div>
          </div>

          <div class="right flex-box">
            <div class="tip">积分+1</div>
            <div class="btn liner-bg" @click="goConfirm">去确认</div>
          </div>
        </div>
        <div class="item flex-box">
          <div class="flex-box">
            <div class="icon">
              <img src="../../assets/img/sign/comm_icon.png" class="img-4" />
            </div>
            <div class="text-1">
              <p class="text-title">发布评价</p>
              <p class="tip">积分+1</p>
            </div>
          </div>

          <div class="right flex-box">
            <div class="tip">积分+1</div>
            <div class="btn liner-bg" @click="goComment">去评价</div>
          </div>
        </div>
      </div>
    </div>
    <activity-about :show.sync="aboutShow"></activity-about>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ActivityAbout from "@/components/ActivityAbout/index";
const activeImg = require("../../assets/img/sign/sign_success.png");
const iconImg = require("../../assets/img/sign/sign_no.png");
const iconAfterDefault = require("../../assets/img/sign/dot_active.png");
const iconAfterActive = require("../../assets/img/sign/dot.png");
export default {
  name: "integralTask",
  components: {
    ActivityAbout
  },
  computed: {
    ...mapGetters({})
  },
  data() {
    return {
      isSign: true,
      aboutShow: false,
      data: [
        {
          id: 1,
          activeImg,
          iconImg,
          iconAfterDefault,
          iconAfterActive,
          isSign: false,
          num: 1
        },
        {
          id: 2,
          activeImg,
          iconImg,
          iconAfterDefault,
          iconAfterActive,
          isSign: false,
          num: 1
        },
        {
          id: 3,
          activeImg,
          iconImg,
          iconAfterDefault,
          iconAfterActive,
          isSign: false,
          num: 1
        },
        {
          id: 4,
          activeImg,
          iconImg,
          iconAfterDefault,
          iconAfterActive,
          isSign: false,
          num: 1
        },
        {
          id: 5,
          activeImg,
          iconImg,
          iconAfterDefault,
          iconAfterActive,
          isSign: false,
          num: 1
        },
        {
          id: 6,
          activeImg,
          iconImg,
          iconAfterDefault,
          iconAfterActive,
          isSign: false,
          num: 1
        },
        {
          id: 7,
          activeImg,
          iconImg,
          iconAfterDefault,
          iconAfterActive,
          isSign: false,
          num: 3
        }
      ],
      detailInfo: {
        integral: 0,
        is_checkin: 0,
        continue_number: 0,
        share_num: 0
      },
      canClick: true
    };
  },
  mounted() {
    this.getDetail();
  },

  methods: {
    async getDetail() {
      let token = this.getCommonToken();
      let res = await this.$store.dispatch("iTaskDetail", { token });
      let { data } = res;
      // let data = {
      //     avatar_img: "http://shop.chuangqilingshou.com//data/avatar_img/202005201544558247.png",
      //     integral: 3814,
      //     is_checkin: 0,
      //     continue_number: 14,
      //     share_num: 0,
      // }
      this.detailInfo = {
        ...data
      };
      //为了防止后端一直写
      let curNum = (data.continue_number % 7)
      this.setIconList(curNum);
    },
    setIconList(num) {
      let { data } = this;
      num = num - 1; //传入的是2天，但是下标-1
      data.forEach((item, index) => {
        if (index <= num) {
          item.isSign = true;
        } else {
          item.setIconList = false;
        }
      });
    },
    //点击签到
    async getSign() {
      if (this.canClick == false) {
        return;
      }
      this.canClick = false;
      let token = this.getCommonToken();
      let res = await this.$store.dispatch("iTaskSign", { token });
      if (res.status.succeed) {
        this.canClick = true;
        this.operationFn({
          type: "success",
          message: "签到成功~"
        });
        this.getDetail();
      }
    },
    //去分享
    goShare() {
      let host = window.location.host
      let protocol = document.location.protocol;
      let msg = protocol +'//'+host+"/change?jieduVueUrl=promote";
      this.$bridge.callHandler("goShare", msg, res => {
        console("获取app响应数据:" + res);
      });
    },
    //去评论
    goComment() {
      let msg = "goComment";
      this.$bridge.callHandler("goComment", msg, res => {
        console("获取app响应数据:" + res);
      });
    },
    //去收货
    goConfirm() {
      let msg = "goConfirm";
      this.$bridge.callHandler("goConfirm", msg, res => {
        console("获取app响应数据:" + res);
      });
    },
   
    
  }
};
</script>

<style scoped lang="less">
</style>
