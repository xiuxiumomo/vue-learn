<template>
	<div class="box">
		<div>
			<slot name="title">默认标题</slot>
		</div>
		<div>
			<slot name="content" :user="user">{{user}}</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "SloteBox",
	props: {
		params: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	data() {
		return {
            user: 'lee'
        };
	},
	methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
