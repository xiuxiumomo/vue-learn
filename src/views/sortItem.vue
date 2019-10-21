<template>
	<div id="list-box">
		<div
			v-for="(item,index) in list"
			:key="index"
			class="item"
			@click="itemFn(item,index)"
		>{{item.name}}</div>
	</div>
</template>
<script>
export default {
	name: "CanvasHtml",
	data() {
		return {
			list: [
				{
					name: "111"
				},
				{
					name: "222"
				},
				{
					name: "333"
				},
				{
					name: "444"
				}
			]
		};
	},
	mounted() {},
	methods: {
		itemFn(item, index) {
			let { list } = this;
			let id = index;
			let prevId = index - 1;
			let nextId = index + 1;
			let newData = [];
			if (id == 0) {
				newData = this.swapArray(list, id, nextId);
			} else {
				newData = this.swapArray(list, id, prevId);
			}
			this.list = newData;
		},
		swapArray(arr, index1, index2) {
            
			arr[index1] = arr.splice(index2, 1, arr[index1])[0];
			return arr;
		}
	}
};
</script>
<style lang="less" scoped>
#list-box {
	.item {
		height: 50px;
		line-height: 50px;
		margin-bottom: 20px;
		background-color: #ccc;
	}
}
</style>