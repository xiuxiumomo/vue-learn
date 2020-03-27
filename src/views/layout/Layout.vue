<template>
  <div class="app-wrapper" :class="appSidebar.open ? '' : 'hideSidebar'">
    <side-bar></side-bar>
    <div class="main-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import AppMain from "./components/AppMain";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { mapGetters } from "vuex";
export default {
  name: "lay-out",
  computed: {
    ...mapGetters({
      appSidebar: "appSidebar"
    })
  },
  components: {
    AppMain,
    NavBar,
    SideBar
  },
  mounted() {
    console.log(this.appSidebar.open)
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped></style>
