<template>
  <div id="lucky-history" class="wrapper">
    <div class="list-box content" v-if="list.length!=0">
      <div class="item normal-bg" v-for="item in list" :key="item.id">
        <div v-if="item.type==0" class="ticket-box flex-box">
          <div class="price-box" v-if="item.type==0">
            <div class="top-money">
              ￥
              <span class="big-num">{{item.coupon_core_amount}}</span>
            </div>
            <div class="use-way">{{item.letfName}}</div>
          </div>
          <div class="num-box">
            <p>{{item.topName}}</p>
            <p>{{item.start_time}}  /  {{item.end_time}}</p>
          </div>
        </div>
        <div class="integral-box flex-box" v-if="item.type==1">
          <div class="price-box">
            <span class="big-num">{{item.num}}</span>积分
          </div>
          <div class="num-box">积分抽奖{{item.num}}积分</div>
        </div>
      </div>
    </div>
    <div class="text" v-else>暂无数据...</div>
    <!-- <div class="empty" style="background-color:#fff" v-else>
      <van-skeleton title :row="3" />
    </div>-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "luckHistory",
  components: {},
  computed: {
    ...mapGetters({})
  },
  data() {
    return {
      // 1是积分 0是券
      list: []
    };
  },
  created(){
    
  },
  mounted() {
    
    this.getHistory();
  },

  methods: {
    init() {
      let wrapper = document.querySelector(".wrapper");
      let scroll = new BScroll(wrapper, {
        scrollbar: {
          fade: true,
          interactive: false
        }
      });
    },
    async getHistory() {
      let token = this.getCommonToken();
      let activity_id = this.getActivityId();
      let res = await this.$store.dispatch("iRoundHistory", {
        token,
        activity_id
      });
      this.caculateList(res.data);
    },
    //重新组装list
    caculateList(data) {
      let res = [];
      let that = this;
      let newList = data.filter(item => {
        return item.type != 3;
      });

      newList.forEach(element => {
        let newItem = that.filterType(element);
        res.push(newItem);
      });
      this.list = res;
    },
    filterType(element) {
      let arr = ['','全场通用','指定商品','指定商家','指定品类']
      if (element.type == 0) {
        return {
          type: element.type,
          num:  element.coupon_core_amount,
          coupon_assist_amount: element.coupon_assist_amount,
          coupon_core_amount: element.coupon_core_amount,
          letfName: arr[element.extent_coupon_type],
          topName: `满${element.coupon_assist_amount}减${element.coupon_core_amount}优惠券`,
          start_time: element.start_time
            ? element.start_time.split(" ")[0]
            : "",
          end_time: element.end_time ? element.end_time.split(" ")[0] : ""
        };
      } else if (element.type == 1) {
        return {
          type: element.type,
          num: element.integral,
          start_time: element.start_time
            ? element.start_time.split(" ")[0]
            : "",
          end_time: element.end_time ? element.end_time.split(" ")[0] : ""
        };
      }
    }
  }
};
</script>

<style scoped lang="less">
</style>
