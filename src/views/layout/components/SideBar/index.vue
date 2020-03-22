<template>
  <div class="sidebar-container">
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu
        
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <side-bar-item :routes="routes"></side-bar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { routes } from "@/router";
import sideBarItem from "../common/SideBarItem";

export default {
  name: "side-bar",
  components: {
    sideBarItem
  },
  computed: {
    ...mapGetters({
      appSidebar: "appSidebar"
    }),
    isCollapse() {
      return !this.appSidebar.open;
    }
  },
  mounted() {
    
  },
  data() {
    return {
      routes
    };
  }
};
</script>
<style lang="less" scoped>
</style>