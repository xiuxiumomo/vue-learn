<template>
	<div>
		<a-modal :title="title" v-model="myShow" @ok="handleOk">
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</a-modal>
	</div>
</template>
<script>
export default {
	name: "common-modal",
	props: {
		title: {
			type: String,
			default: "弹窗标题"
		},
		show: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		show(data) {
			this.myShow = data;
		},
		myShow(data) {
			if (data == false) {
				this.$emit("update:show", false);
			}
		}
	},
	data() {
		return {
			myShow: false
		};
	},
	methods: {
		handleOk() {
			this.$emit("update:show", false);
		}
	}
};
</script>