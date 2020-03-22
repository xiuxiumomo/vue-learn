<template>
  <div class="bar-item">
    <el-submenu v-for="item in routes" :index="item.path" :key="item.name">
      <template slot="title">
        <svg-icon :icon-class="item.meta.icon"></svg-icon>
        {{item.meta.title}}
      </template>
      <el-menu-item
        v-for="cItem in item.children"
        :key="cItem.name"
        :index="item.path+'/'+cItem.path"
        @click="goRouter(cItem)"
      >{{cItem.meta.title}}</el-menu-item>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "bar-item",
  props: {
    routes: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    goRouter(item) {
      let { name } = item;
      this.commonRouterChage({ name });
    }
  }
};
</script>