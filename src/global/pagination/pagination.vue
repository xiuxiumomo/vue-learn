<template>
  <div class="global-pagination">
    <el-pagination
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="total"
      :page-size="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name:'globalPagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    pageSizes: {
      type: Array,
      default: function() {
        return [20];
      }
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize:{
      type: Number,
      default: 20
    }
  },
  methods: {
    handleCurrentChange: function(page) {
      this.$emit("current-change", page);
    },
    handleSizeChange: function (size) {
      this.$emit("size-change", size);
    }
  }
};
</script>

<style>
</style>
