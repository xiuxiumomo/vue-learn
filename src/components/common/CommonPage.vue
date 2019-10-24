<template>
	<div class="common-page">
		<a-pagination
			:total="total"
			:showTotal="total => `总共 ${total} 条`"
			:pageSize="20"
			:showSizeChanger="showSizeArray"
			:pageSizeOptions="pageSizeOptions"
			:defaultCurrent="1"
			@change="pageChange"
			@showSizeChange="onShowSizeChange"
		>
			<template slot="buildOptionText" slot-scope="props">
				<span>{{props.value}}条/页</span>
			</template>
		</a-pagination>
	</div>
</template>
<script>
export default {
	name: "common-page",
	props: {
		total: {
			default: 0,
			type: Number
        },
        showSizeArray: {
            default: false, //默认不显示每列数组
            type: Boolean
        }
	},
	data() {
		return {
			pageSizeOptions: ["10", "20", "30", "40"]
		};
	},
	methods: {
		pageChange(e) {
			this.$emit("pageChange", e);
        },
        onShowSizeChange(e) {
            this.$emit("sizeArrayChange", e);
        }
	}
};
</script>
<style lang="less" scoped>
.common-page {
	margin-top: 20px;
}
</style>