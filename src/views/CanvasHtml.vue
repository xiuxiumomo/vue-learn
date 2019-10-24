<template>
	<div id="list-box">
		<div id="box"></div>
		<div id="img-box">
			<div v-for="(item, index) in pageArray" :key="index" class="list">
				<div v-for="(jitem,_index) in item" :key="_index" class="list-item">{{jitem}}</div>
			</div>
		</div>
	</div>
</template>
<script>
import Str from "@/utils/data";
import html2canvas from "html2canvas";
export default {
	name: "CanvasHtml",
	data() {
		return {
			contentArray: [],
			pageArray: []
		};
	},
	created() {},
	mounted() {
		this.getListData();
		this.$nextTick(() => {
			this.myHtml();
		});
	},
	methods: {
		getListData() {
			let arrayData = Str.split("↵");
			this.contentArray = arrayData;
			const num = 24;
			//const line = 14;
			let pageArray = [];
			let calcData = [];
			arrayData.forEach(item => {
				// 计算一段文字需要几行
				let line = 0;
				if (item.length <= num - 2) {
					line = 1;
				} else {
					let s = item.length - (num - 2);
					line = Math.ceil(s / num) + 1;
				}
				for (let i = 0; i < line; i++) {
					let lineData = "";
					if (i == 0) {
						lineData = item.slice(0, num - 2);
					} else {
						let w_num = item.slice(i * num - 2, num * i + num - 2);
						lineData = w_num;
					}
					calcData.push(lineData);
				}
			});
			let _index = 0;
			for (let k = 0; k < calcData.length; k++) {
				let item = calcData.slice(_index, _index + 14);
				if (item.length > 0) {
					pageArray.push(item);
				}
				_index = _index + 14;
			}
			this.pageArray = pageArray;

			// this.initCanvas();
		},
		myHtml() {
			let doms = document.querySelectorAll("list");
			for (let i = 0; i < doms.length; i++) {
				html2canvas(doms[i], { height: 600 }).then(canvas => {
					let image = this.htmlToCanvas(canvas);
					document.getElementById("box").append(image);
				});
			}
		},
		initCanvas() {
			let { pageArray } = this;
			for (let i = 0; i < pageArray.length; i++) {
				this.getCanvas(pageArray[i]);
			}
		},
		getCanvas(arr = []) {
			if (arr.length == 0) {
				return;
			}
			let canvas = document.createElement("canvas");
			canvas.width = 750;
			canvas.height = 600;
			let context = canvas.getContext("2d");
			//let fontSize = 30;
			let cWidth = 750;
			context.font = "bold 30px Arial";
			context.textAlign = "left";
			context.textBaseline = "top";
			context.fillStyle = "#333";
			for (let i = 0; i < arr.length; i++) {
				let item = arr[i];
				for (let j = 0; j < item.length; j++) {
					//如果是第一行
					if (item.length < 22) {
						context.fillText(item[j], j * 30 + 60, 40 * i, cWidth);
					} else {
						context.fillText(item[j], j * 30, 40 * i, cWidth);
					}
				}
			}
			let img = this.htmlToCanvas(canvas);
			let el = document.getElementById("img-box");
			el.append(img);
		},
		htmlToCanvas(el) {
			var image = new Image();
			image.src = el.toDataURL("image/png");
			image.style.display = "block";
			return image;
		}
	}
};
</script>
<style lang="less" scoped>
.list {
	width: 750px;
	.list-item {
		font-size: 30px;
		line-height: 2em;
	}
}
</style>