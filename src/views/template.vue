<template>
  <div class="app-container">
    <div class="bar flex">
      <div class="flex-left">
        <label
          class="radio-label"
          style="padding-left:0"
        >推送对象</label>
        <el-select
          v-model="params.send_type"
          placeholder="请选择推送对象"
          style="width:140px"
          @change="changeSearchTypeFn"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </div>
      <div class="flex-right">
        <el-input
          placeholder="输入通知标题"
          style="width:240px;"
          size="mini"
          prefix-icon="el-icon-search"
          v-model="params.keywords"
          @keyup.native.enter="fuzzyQueryFn"
        />
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          class="search"
          @click="fuzzyQueryFn"
        >搜索</el-button>
        <router-link :to="'/notifyManage/notify/add'">
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="mini"
          >新增</el-button>
        </router-link>
      </div>
    </div>
    <el-table
      :data="data"
      border
      stripe
      style="width: 100%;text-align: center;"
      v-loading="loading"
      multipleTable
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        prop="id"
        label="序号"
        min-width="80"
        fixed
      ></el-table-column>
      <el-table-column
        prop="name"
        label="通知标题"
        min-width="150"
        show-overflow-tooltip
        align="center"
      ></el-table-column>
      <el-table-column
        prop="_book_name"
        label="推送对象"
        min-width="120"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="created_at"
        label="推送时间"
        min-width="120"
        show-overflow-tooltip
        align="center"
      ></el-table-column>
      <el-table-column
        prop="updated_at"
        label="创建时间"
        min-width="120"
        show-overflow-tooltip
        align="center"
      ></el-table-column>
      <el-table-column
        prop="updated_at"
        label="消息状态"
        min-width="120"
        show-overflow-tooltip
        align="center"
      ></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150"
        align="center"
      >
        <template slot-scope="scope">
          <router-link :to="'/novelManage/chapter/edit/' + scope.row.id">
            <el-button
              size="mini"
              type="primary"
            >编辑</el-button>
          </router-link>
          <el-popover
            placement="top"
            width="100"
            v-model="scope.row.delete"
          >
            <p>确认删除选择的章节？</p>
            <div style="text-align: right; margin: 0">
              <el-button
                size="mini"
                type="text"
                @click="scope.row.delete = false"
              >取消</el-button>
              <el-button
                type="primary"
                size="mini"
                @click="scope.row.delete = false"
              >确定</el-button>
            </div>
            <el-button
              size="mini"
              type="danger"
              slot="reference"
              @click="scope.row.delete = true"
            >删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container clearfix">
      <div class="float-left mr-30">
        <el-popover
          placement="top"
          width="100"
          v-model="multipleDelete"
        >
          <p>确认删除选择的书籍？</p>
          <div style="text-align: right; margin: 0">
            <el-button
              size="mini"
              type="text"
              @click="multipleDelete=false"
            >取消</el-button>
            <el-button
              type="primary"
              size="mini"
              @click="multipleDeleteFn(),multipleDelete=false"
            >确定</el-button>
          </div>
          <el-button
            size="mini"
            type="danger"
            slot="reference"
            @click="multipleDelete = true"
            :disabled="multipleDeleteVisible"
          >删除</el-button>
        </el-popover>
      </div>
      <div class="float-left">
        <global-pagination
            @current-change="handleCurrentChange"
            :current-page="params.page"
            :page-size="params.per_page"
            @size-change="handleSizeChange"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        ></global-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({}),
    multipleDeleteVisible() {
      if (this.multipleSelect.length == 0) this.multipleDelete = false;
      return this.multipleSelect.length === 0;
    }
  },
  watch: {},
  data() {
    return {
      data: [{ id: 1 }],
      loading: false,
      options: [
        {
          id: 0,
          name: "全部"
        },
        {
          id: 1,
          name: "读者"
        },
        {
          id: 2,
          name: "作者"
        },
        {
          id: 3,
          name: "CPS账号"
        }
      ],
      params: {
        send_type: 0,
        page: 1,
        keyword: ""
      },
      total: 0,
      size: 20,
      multipleSelect: [],
      multipleDelete: false,
      page: 1
    };
  },
  created() {},
  methods: {
    getListDataFn: async function() {
      let that = this;
      that.loading = true;
      await that.triggerActionsFn("getLookPicUser", this.params, true);
      that.loading = false;
    },
    handleSelectionChange: function(e) {
      let ids = [];
      e.forEach(item => {
        ids.push(item.id);
      });
      this.multipleSelect = ids;
    },
    multipleDeleteFn: function() {},
    changeSendTypeFn: function(e) {
      console.log(e);
    },
    handleCurrentChange: function(page) {
      this.params.page = page;
      this.getListDataFn();
    },
    fuzzyQueryFn: function() {
      this.params.page = 1;
      this.getListDataFn();
    }
  }
};
</script>

<style>
</style>

