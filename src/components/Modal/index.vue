<template>
  <div class="modal" @click="modalZZClick" @touchmove.prevent.stop>
    <div class="modal-box" @click.prevent.stop>
      <span class="modal-close" @click="closeModal"></span>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: ["modalClickCallBack", "closeModal"],
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},

  methods: {
    modalZZClick() {
      this.modalClickCallBack && this.modalClickCallBack();
    },
    close() {
      this.closeModal && this.closeModal();
    }
  }
};
</script>
<style scoped lang="less">
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  left: 0px;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  bottom: 0px;
  .modal-box {
    width: 500px;
    background-color: #fff;
    position: relative;
  }
  .modal-close {
    width: 46px;
    height: 46px;
    position: absolute;
    top: 5px;
    right: 5px;
    background: url("../../assets/img/contact/close.png") no-repeat center
      center;
    background-size: 46px 46px;
  }
}
</style>
