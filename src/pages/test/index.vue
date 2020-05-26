<template>
  <div class="test">
    <div class="wrapper">
      <ul class="content">
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
      </ul>
      <div>到底了</div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Test",
  data() {
    return {
      name: "jack",
      val: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let wrapper = document.querySelector(".wrapper");
      let scroll = new BScroll(wrapper, {
        scrollbar: {
          fade: true,
          interactive: false // 1.8.0 新增
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .content {
    li {
      height: 100px;
      margin-bottom: 20px;
      background-color: #ccc;
    }
  }
}
</style>