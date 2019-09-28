<template>
  <div class="hello">
    1
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  color: #000;
  font-size: 14px;
  .box{
    background-color: #ccc;
    height: 100px;
  }
}
</style>
