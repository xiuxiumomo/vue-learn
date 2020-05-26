<template>
  <div id="promote" class="normal-bg">
    <div class="msg-box">
      <div class="head">
        <div class="avatar">
          <img :src="promoteInfo.avatar_image" alt />
        </div>
        <div class="nick">
          <p class="name">{{promoteInfo.nickname}}</p>
          <p class="time">{{promoteInfo.reg_time}}</p>
        </div>
      </div>
      <div class="invite flex-box">
        <div class="text">我的邀请码:</div>
        <div class="code-box flex-box">
          <div class="code">{{promoteInfo.invite_code}}</div>
          <div class="line"></div>
          <div class="code-text" @click="getCopy($event)">复制</div>
        </div>
      </div>
    </div>
    <div class="qr-box">
      <div class="img-box">
        <img :src="promoteInfo.invite_qrcode_image" alt />
      </div>
      <div class="info">
        <p>长按识别二维码</p>
        <p>加入街都星球</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import clip from "@/utils/clipboard";
export default {
  name: "promote",
  components: {},
  computed: {
    ...mapGetters({})
  },
  data() {
    return {
      promoteInfo: {
        nickname: "街都",
        avatar_image: "",
        invite_code: "E15220",
        invite_qrcode_image: "",
        invite_url: "",
        reg_time: ""
      }
    };
  },
  mounted() {
    this.getDetail();
    this.shareClick();
    
  },

  methods: {
    getCopy(ev) {
      let { invite_code } = this.promoteInfo;
      clip(invite_code, ev);
    },
    async getDetail() {
      let token = this.getCommonToken();
      let res = await this.$store.dispatch("iTaskPromote", { token });
      if (res.status.succeed) {
        let { data } = res;
        this.promoteInfo = {
          ...data
        };
      }
    },
    shareClick() {
      let msg = 'shareClick';
      this.$bridge.callHandler(msg, msg, res => {
        console.log("h5获取app响应数据:" + res);
      });
    }
  }
};
</script>

<style scoped lang="less">
</style>
