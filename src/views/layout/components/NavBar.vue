<template>
  <div class="navbar">
    <Hamburger
      class="hamburger-container"
      :isActive="appSidebar.open"
      :toggleClick="toggleClick"
    ></Hamburger>
    <Breadcrumb></Breadcrumb>
    <div style="display: inline-block;height: 50px;">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="https://s2.ax1x.com/2019/08/22/m0g5t0.jpg" />
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
      isActive: false,
      avatar: '',
    };
  },
  methods: {
    toggleClick() {
      this.$store.dispatch("ToggleSideBar");
    },
    logout() {
      this.commonRouterChange({
        name: 'Login'
      })
      
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
