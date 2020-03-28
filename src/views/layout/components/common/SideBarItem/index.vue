<template>
  <div class="bar-item">
    <template v-for="item in routes">
      <el-submenu
        :index="item.path?item.path:'Dashbord'"
        :key="item.name"
        v-if="(!item.hidden && item.children)"
      >
        <template slot="title">
          <svg-icon :icon-class="item.meta.icon"></svg-icon>
          {{item.meta.title}}
        </template>

        <template v-for="cItem in item.children">
          <el-menu-item
            :key="cItem.name"
            :index="item.path+'/'+cItem.path"
            @click="goRouter(cItem)"
            v-if="(!cItem.hidden)"
          >{{cItem.meta.title}}</el-menu-item>
        </template>
      </el-submenu>
    </template>
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
  computed: {},
  data() {
    return {};
  },
  mounted() {
    console.log(this.routes);
  },
  methods: {
    goRouter(item) {
      let { name } = item;
      this.commonRouterChange({ name });
    },
    showRouterArray(arr) {
      if (arr.length === 0) {
        return false;
      }
      let res = arr.map(item => {
        return !item.hidden;
      });
      if (res.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>