<template>
  <div id="pox">
    <p>您的参数有误,请重新进入~</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "showPage",
  components: {
   
  },
  computed: {
    ...mapGetters({})
  },
  data() {
    return {
     
    };
  },
  mounted() {
    
  },

  methods: {
    async getData() {
      
    },
    
   
   
  }
};
</script>

<style scoped lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>
