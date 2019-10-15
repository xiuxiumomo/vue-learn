<template>
	<div>
		<a-skeleton :loading="true">1111</a-skeleton>
		<!-- <div v-for="(item,index) in list" :key="index">{{item.title}}</div>
		<infinite-loading @infinite="infiniteHandler">
			<div slot="no-more">我也是有底线得呀~</div>
		</infinite-loading>-->
		<div class="item-box">
			<div class="item flex-box" v-for="(item,index) in itemArray" :key="index">
				<div class="left-item">
					<a-input placeholder="default size" v-model="item.value" style="width: 240px" />
					<a-icon type="plus" class="add-icon" v-if="index==0" @click="itemChange(index,1)" />
					<a-icon type="minus" class="add-icon" v-else @click="itemChange(index,0)" />
				</div>
				<div class="right-item">
					<a-select style="width: 120px" v-model="item.select" placeholder="select placeholder">
						<a-select-option
							v-for="(_item,index) in selectArray"
							:key="index"
							:value="_item.id"
						>{{_item.name}}</a-select-option>
					</a-select>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
//import InfiniteLoading from "vue-infinite-loading";
export default {
	name: "Infinite",
	// components: {
	// 	InfiniteLoading
	// },
	data() {
		return {
			page: 0,
			total: 3,
			list: [],
			loading: true,
			selectArray: [
				{
					id: 0,
					name: "全部"
				},
				{
					id: 1,
					name: "用途一"
				},
				{
					id: 2,
					name: "用途二"
				},
				{
					id: 3,
					name: "用途三"
				}
			],
			itemArray: [
				{
					value: "",
					select: 0
				}
			]
		};
	},
	mounted() {},
	methods: {
		getData() {
			let page = this.page;
			let arr = [];
			for (let i = 0; i < 50; i++) {
				arr.push({
					title: `消息标题-${i}-${page}`
				});
			}
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(arr);
				}, 2000);
			});
		},

		async infiniteHandler($state) {
			let { page, total } = this;
			if (page < total) {
				this.page += 1;
				let res = await this.getData();
				this.list.push(...res);

				$state.loaded();
			} else {
				$state.complete();
			}
		},
		typeChange(e) {
			console.log(e);
		},
		itemChange(index, type) {
			let { itemArray = [] } = this;
			if (type == 1) {
				this.itemArray = [...itemArray, { value: "", select: 0 }];
			} else {
				itemArray.splice(index, 1);
			}
		}
	}
};
</script>
<style lang="less" scoped>
.flex-box {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.item-box {
	width: 500px;
	.item {
		.left-box {
			position: relative;
			.add-icon {
				width: 50px;
				height: 50px;
				position: absolute;
				right: -50px;
				top: 0;
				display: inline-block;
			}
		}
		.right-box {
		}
	}
}
</style>