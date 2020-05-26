<template>
  <div class="dialog">
    <div class="mask" @click="cancel"></div>
    <div class="dialog-content">
      <!-- 标题 -->
      <h3 class="title">{{ modal.title }}</h3>
      <!-- 自定义内容 -->
      <slot name="content"></slot>
      <!-- 按钮组 -->
      <div class="btn-group" v-if="modal.footerType==1">
        <div class="btn" @click="cancel">{{ modal.cancelButtonText }}</div>
        <div class="btn" @click="submit">{{ modal.confirmButtonText }}</div>
      </div>
      <!-- 按钮组 -->
      <div class="btn-group btn-group-2" v-else>
        <div class="btn" @click="submit">{{ modal.confirmButtonText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          title: "温馨提示",
          footerType:2,
          cancelButtonText: "取消",
          confirmButtonText: "确定"
        };
      }
    }
  },
  data() {
    return {
      resolve: "",
      reject: "",
      promise: "" //保存promise对象
    };
  },
  computed: {
    modal() {
      let {
        title = "温馨提示",
        footerType = 2,
        cancelButtonText = "取消",
        confirmButtonText = "确定"
      } = this.options;
      return {
        title,
        footerType,
        cancelButtonText,
        confirmButtonText
      };
    }
  },
  methods: {
    submit() {
      this.confirm(true);
    },

    cancel() {
      this.confirm(false);
    },

    confirm(status) {
      this.$emit("confirm", status);
    }
  }
};
</script>

<style scoped lang="less">
.dialog {
  position: relative;

  .dialog-content {
    position: fixed;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    background: white;
    border-radius: 5px;
    padding: 20px;
    padding-bottom: 0;
    min-height: 140px;
    width: 600px;
    min-height: 300px;
    border-radius: 20px;
    overflow: hidden;
    .title {
      font-size: 32px;
      font-weight: 600;
      line-height: 60px;
      text-align: center;
    }
    .text {
      font-size: 14px;
      line-height: 30px;
      color: #555;
    }
    .btn-group {
      width: 100%;
      height: 80px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: absolute;
      right: 0;
      bottom: 0px;

      .btn {
        font-size: 32px;
        width: 50%;
        text-align: center;
        height: 100%;
        border: 1px solid #f2f2f2;
        border-bottom: 0;
        line-height: 80px;
        &:last-child {
          color: #000;
        }
      }
      &.btn-group-2 {
        .btn {
          text-align: center;
          width: 100%;
          border-top: 1px solid #f2f2f2;
        }
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}
</style>