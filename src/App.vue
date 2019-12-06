<template>
  <div id="app">
    <lay-out>
       <router-view/>
    </lay-out>
     
  </div>
</template>

<script>

import LayOut from '@/layouts/index.vue'
export default {
  name: 'app',
  components: {
    LayOut
  }
}
</script>

<style lang="less">
 @import "./assets/less/index";

</style>
