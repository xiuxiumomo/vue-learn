<template>
	<div class="about">
		<h1>This is an about page1</h1>
	

		<viewer :images="images">
			<img v-for="src in images" :src="src" :key="src" />
		</viewer>
	</div>
</template>
<script>
export default {
	name: "About",
	data() {
		return {
			images: [
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570702371894&di=611dc38503a359bee8e43238f946837c&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201504%2F18%2F20150418H0811_MUvzP.jpeg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570702371894&di=7c9b1458b2cfe2d766890619957a29f0&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fsjbbs%2F8017%2Fa8016719_s.jpg"
			]
		};
	},
	methods: {}
};
</script>
<style lang="less" scoped>
img{
  width: 100px;
  height: 100px;
}
</style>
