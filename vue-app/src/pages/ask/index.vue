<template>
  <div>
    <button @click="getConfirm">ask</button>

    <my-dialog :options="options" v-show="show" ref="dialog">
      <div slot="content">aaaa</div>>
    </my-dialog>
  </div>
</template>
<script>
import MyDialog from "../../components/MyDialog/idex";
export default {
  name: "ask",
  components: {
    MyDialog
  },
  data() {
    return {
      show: false,
      options: {
        title: "是吗"
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    getConfirm() {
      this.show = true;
      this.$refs.dialog
        .confirm()
        .then(() => {
          console.log("确定")
          this.show = false;
        })
        .catch(() => {
          console.log("取消")
          this.show = false;
        });
    }
  }
};
</script>
<style lang="less" scoped>
</style>