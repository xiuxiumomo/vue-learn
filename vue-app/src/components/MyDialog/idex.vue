<template>
  <div class="dialog" >
    <div class="mask"  @click="cancel"></div>
    <div class="dialog-content">
      <!-- 标题 -->
      <h3 class="title">{{ modal.title }}</h3>
      <!-- 自定义内容 -->
      <slot name="content"></slot>
      <!-- 按钮组 -->
      <div class="btn-group" v-if="footerType==1">
        <div class="btn" @click="cancel">{{ modal.cancelButtonText }}</div>
        <div class="btn" @click="submit">{{ modal.confirmButtonText }}</div>
      </div>
      <!-- 按钮组 -->
      <div class="btn-group" v-else>
        <div class="btn" @click="cancel">{{ modal.cancelButtonText }}</div>
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
      default:  () => {
        return {
            title: "温馨提示",
            footerType: 1,
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
        title = "提示",
        footerType = 1,
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
      this.resolve();
    },
   
    cancel() {
      this.reject();
    },
   
    confirm() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      return this.promise; //返回promise对象,给父级组件调用
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
    min-height: 140px;
    width: 300px;
    height: 200px;
    .title {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }
    .text {
      font-size: 14px;
      line-height: 30px;
      color: #555;
    }
    .btn-group {
      display: flex;
      position: absolute;
      right: 0;
      bottom: 10px;
      .btn {
        padding: 10px 20px;
        font-size: 14px;
        &:last-child {
          color: #76d49b;
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