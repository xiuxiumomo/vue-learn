<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
require("echarts/theme/macarons");
import { debounce } from "@/utils";

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "350px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: "异常公众号数量"
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
      mockData: {
        timeData: [
          "公众号1",
          "公众号2",
          "公众号33",
          "公众号2",
          "公众号2",
          "公众号2",
          "公众号2",
          "公众号2",
          "公众号2",
          "公众号2",
          "公众号2",
          "公众号2",
          "公众号2",
          "公众号2",
          "公众号2"
        ],
        expectedData: [
          { name: "g1", value: "10" },
          { name: "g2", value: "20" },
          { name: "g3", value: "100" },
          { name: "g1", value: "10" },
          { name: "g2", value: "20" },
          { name: "g3", value: "100" },
          { name: "g1", value: "10" },
          { name: "g2", value: "20" },
          { name: "g3", value: "100" },
          { name: "g1", value: "10" },
          { name: "g2", value: "20" },
          { name: "g3", value: "100" },
          { name: "g1", value: "10" },
          { name: "g2", value: "20" },
          { name: "g3", value: "100" }
        ]
      }
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.initChart();
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize();
        }
      }, 100);
      window.addEventListener("resize", this.__resizeHandler);
    }
    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName("sidebar-container")[0];
    this.sidebarElm &&
      this.sidebarElm.addEventListener(
        "transitionend",
        this.sidebarResizeHandler
      );
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener("resize", this.__resizeHandler);
    }

    this.sidebarElm &&
      this.sidebarElm.removeEventListener(
        "transitionend",
        this.sidebarResizeHandler
      );

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === "width") {
        this.__resizeHandler();
      }
    },
    setOptions({ expectedData, timeData } = {}) {
      let { title } = this;
      this.chart.setOption({
        dataZoom: [
          {
            type: "slider",
            show: timeData.length > 40 ? true : false,
            xAxisIndex: [0],
            left: "9%",
            bottom: -5,
            start: 10,
            end: 90 //初始化滚动条
          }
        ],
        xAxis: {
          data: timeData,
          boundaryGap: true,
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: 0,
            interval: 0
          }
        },
        grid: {
          left: 20,
          right: 20,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "cross"
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: [title]
        },
        series: [
          {
            name: title,
            itemStyle: {
              normal: {
                color: "#e6a23c",
                lineStyle: {
                  color: "#e6a23c",
                  width: 2
                }
              }
            },
            smooth: true,
            type: "line",
            data: expectedData,
            animationDuration: 2800,
            animationEasing: "cubicInOut"
          }
        ]
      });
    },
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
      // this.setOptions(this.mockData);
    }
  }
};
</script>
