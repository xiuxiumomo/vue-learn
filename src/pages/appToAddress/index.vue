<template>
  <div>
    <my-loading></my-loading>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MyLoading from "@/components/Loading";
import { setDeviceConfig, getDeviceConfig } from "@/utils/auth";
export default {
  name: "app-loading",
  components: {
    MyLoading
  },
  computed: {
    ...mapGetters({})
  },
  data() {
    return {};
  },
  mounted() {
    
  },

  methods: {
    change() {
     
    }
  }
};
</script>

<style scoped lang="less">
</style>
