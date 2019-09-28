<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getNews } from "@/api/index";

export default {
	name: "home",
	components: {
		HelloWorld
	},
	mounted() {
		this.getNewsList();
	},
	methods: {
		getName() {
			console.log(111);
		},
		async getNewsList() {
			const res = await getNews();
			console.log(res);
		}
	}
};
</script>
