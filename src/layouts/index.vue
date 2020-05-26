<template>
  <div class="layout-container">
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {},
  watch: {},
  created() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.layout-container {
}
</style>
