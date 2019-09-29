<template>
	<div class="home">
		<div id="myChart" :style="{width: '1200px',height: '500px'}"></div>
	</div>
</template>

<script>
// @ is an alias to /src

import { getNews } from "@/api/index";

export default {
	name: "home",
	components: {},
	data() {
		return {
			priceArray: [],

			priceData: {
				time: [],
				price: []
			}
		};
	},
	mounted() {
		this.getNewsList();
		this.drawLine();
	},
	methods: {
		drawLine() {
			const { priceData } = this;
			let myChart = this.$echarts.init(
				document.getElementById("myChart")
			);

			myChart.setOption({
				title: { text: "房价示列表格" },
				tooltip: {},
				xAxis: {
					data: priceData.time
				},
				yAxis: {},
				series: [
					{
						name: "价格",
						type: "line",
						data: priceData.price
					}
				]
			});
		},
		async getNewsList() {
			const res = await getNews();
			if (res.code == 200) {
				this.priceArray = res.data;
				let data = res.data[0].rows;

				let time = [],
					price = [];
				data.forEach(item => {
					time.push(item.month);
					price.push(item.data ? item.data : 0);
				});
				this.priceData = {
					time,
					price: price
				};

				this.drawLine();
			}
		}
	}
};
</script>
<style scoped lang='less'>
	.home{
		padding: 20px;
	}
</style>
