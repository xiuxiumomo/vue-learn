<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" :isActive="appSidebar.open" :toggleClick="toggleClick"></Hamburger>
    <Breadcrumb></Breadcrumb>
  </div>
</template>
<script>
import Hamburger from "./common/Hamburger";
import Breadcrumb from "./common/Breadcrumb";
import { mapGetters } from "vuex";
export default {
  name: "nav-bar",
  computed: {
    ...mapGetters({
      appSidebar: "appSidebar"
    })
  },
  components: {
    Hamburger,
    Breadcrumb
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleClick() {
      this.$store.dispatch("ToggleSideBar");
    }
  }
};
</script>
<style lang="less" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      // margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>