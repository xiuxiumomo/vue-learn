<template>
  <div class="home">
    <div class="select-box">
      <label>选择城市：</label>
      <a-select :defaultValue="defaultCity" style="width: 240px" @change="cityChangeFn">
        <a-select-option
          :value="item.value"
          v-for="(item,index) in cityArr"
          :key="index"
        >{{item.name}}</a-select-option>
      </a-select>
    </div>
    <div class="select-box" style="display: none">
      <label>选择期限：</label>
      <a-select :defaultValue="defaultTime" style="width: 240px" @change="timeChangeFn">
        <a-select-option value="1">近1年</a-select-option>
        <a-select-option value="3">近3年</a-select-option>
      </a-select>
    </div>
    <div class="chart-box">
      <a-tabs defaultActiveKey="1" @change="typeChange">
        <a-tab-pane tab="供给" key="1"></a-tab-pane>
        <a-tab-pane tab="关注" key="2" forceRender></a-tab-pane>
        <a-tab-pane tab="价值" key="3"></a-tab-pane>
      </a-tabs>
      <div id="myChart" :style="{width: '1200px',height: '500px'}"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { getNews } from "@/api/index";

export default {
  name: "home",
  components: {},
  data() {
    return {
      defaultCity: "",
      defaultTime: "1",
      cityArr: [
        {
          value: "",
          name: "全抚州"
        },
        {
          value: "DX",
          name: "东乡"
        },
        {
          value: "LC",
          name: "临川"
        },
        {
          value: "GC",
          name: "广昌"
        },
        {
          value: "JX",
          name: "金溪"
        },
        {
          value: "LA",
          name: "乐安"
        },
        {
          value: "LD",
          name: "黎川"
        },
        {
          value: "NC",
          name: "南城"
        },
        {
          value: "NF",
          name: "南丰"
        },
        {
          value: "YH",
          name: "宜黄"
        },
        {
          value: "ZX",
          name: "资溪"
        }
      ],
      priceArray: [],
      priceData: {
        time: [],
        dataArr: []
      }
    };
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    drawLine() {
      const { priceData } = this;
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      priceData.dataArr.forEach(item => {
        let _item = item;
        _item.forEach(jtem => {
          jtem.value = jtem.data;
        });
        return _item;
      });

      myChart.setOption({
        title: { text: "" },
        tooltip: {},
        xAxis: {
          data: priceData.time
        },
        yAxis: {},
        legend: {
          data: ["供给", "关注", "价值"],
          selected: {
            供给: true,
            关注: false,
            价值: false
          }
        },
        series: [
          {
            name: "供给",
            type: "line",
            data: priceData.dataArr[0],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  lineStyle: {
                    color: "#E6A23C"
                  },
                  textStyle: {
                    color: "#E6A23C",
                    fontSize: 14
                  }
                }
              }
            }
          },
          {
            name: "关注",
            type: "line",
            data: priceData.dataArr[1],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  lineStyle: {
                    color: "#67C23A"
                  },
                  textStyle: {
                    color: "#67C23A",
                    fontSize: 14
                  }
                }
              }
            }
          },
          {
            name: "价值",
            type: "line",
            data: priceData.dataArr[2],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  lineStyle: {
                    color: "#409EFF"
                  },
                  textStyle: {
                    color: "#409EFF",
                    fontSize: 14
                  }
                }
              }
            }
          }
        ]
      });
    },
    async getNewsList() {
      let params = {
        district: this.defaultCity,
        sinceyear: this.defaultTime
      };
      const res = await getNews(params);
      if (res.code == 200) {
        this.priceArray = res.data;
        let data = res.data[0].rows;
        let time = [];
        let dataArr = [];
        res.data.forEach(item => {
          dataArr.push(item.rows);
        });

        data.forEach(item => {
          time.push(item.month);
        });
        this.priceData = {
          time,
          dataArr
        };

        this.drawLine();
      }
    },
    //三种数据
    typeChange(e) {
      consoe.log(e);
    },
    cityChangeFn(e) {
      this.defaultCity = e;
      this.getNewsList();
    },
    timeChangeFn(e) {
      this.defaultTime = e;
      this.getNewsList();
    }
  }
};
</script>
<style scoped lang='less'>
.home {
  padding: 20px;
  .select-box {
    margin-bottom: 20px;
  }
}
</style>
