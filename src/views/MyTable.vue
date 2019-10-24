<template>
	<div class="my-table">
		<a-table :columns="columns" :dataSource="data" :pagination="false" bordered>
			<template slot="action" slot-scope="text">
				<a @click="() => myEdit(text)">Edit</a>
			</template>
		</a-table>
		<common-page :total="total" @pageChange="pageChange"></common-page>
        <common-modal :show.sync="show"></common-modal>
	</div>
</template>
<script>
import CommonPage from "@/components/common/CommonPage";
import CommonModal from "@/components/common/CommonModal";
export default {
	name: "my-table",
	components: {
        CommonPage,
		CommonModal
	},
	data() {
		return {
            total: 30,
            show: false,
			columns: [
				{
					title: "name",
					dataIndex: "name",
					key: "name",
					align: "center"
				},
				{
					title: "age",
					dataIndex: "age",
					key: "age",
					align: "center"
				},
				{
					title: "sex",
					dataIndex: "sex",
					key: "sex",
					align: "center"
				},
				{
					title: "Action",
					key: "operation",
					fixed: "right",
					width: 100,
					scopedSlots: { customRender: "action" }
				}
			],
			data: [
				{
					name: "我是标题",
					age: 10,
					sex: "男",
					key: 1
				}
			]
		};
	},
	methods: {
		pageChange(e) {
			console.log(e);
		},
		myEdit(text) {
            console.log(text);
            this.show = true
		}
	}
};
</script>