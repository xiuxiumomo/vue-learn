<template>
	<div class="container">
		<div>我是新闻{{userList.total}}</div>
		<div>
			<el-button type="primary">成功</el-button>
		</div>
	</div>
</template>

<script>
//import Logo from "~/components/Logo.vue";
import { mapGetters } from "vuex";
export default {
	components: {
		// Logo
	},
	computed: {
		...mapGetters({
			userList: "userList"
		})
	},
	mounted() {
		this.userGetList();
	},
	data() {
		return {};
	},
	methods: {
		async userGetList() {
			let res = await this.$store.dispatch("userGetList", {});
		}
	}
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: "Quicksand", "Source Sans Pro", -apple-system,
		BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
		sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
