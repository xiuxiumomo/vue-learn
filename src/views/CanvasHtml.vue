<template>
	<div id="list-box">
		<a-button type="primary" @click="clipData($event)">复制</a-button>
		<div id="box"></div>
		<div id="img-box">
			<div v-for="(item, index) in contentArray" :key="index" class="list-item">
				<div>{{item}}</div>
			</div>
		</div>
	</div>
</template>
<script>
import Str from "@/utils/data";
import html2canvas from "html2canvas";
import clip from '@/utils/clip';
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
		
		},
		myHtml() {
			let doms = document.getElementById("img-box");
			html2canvas(doms, {}).then(canvas => {
				let image = this.htmlToCanvas(canvas);
				document.getElementById("box").append(image);
			});
		},
	
		
		htmlToCanvas(el) {
			var image = new Image();
			image.src = el.toDataURL("image/png",0.1);
			image.style.display = "inline-block";
			return image;
		},
		clipData(ev) {
			let targe = document.getElementById("box");
            clip.handleClipTargetboard(targe, event);
		}
	}
};
</script>
<style lang="less" scoped>
#list-box{
	position: relative;
}
#box{
	position: absolute;
	top: -1000000%;
	left: -10000%;
	opacity: 0;

}
#img-box {
	width: 750px;
	margin: 100px auto;
	.list-item {
		font-size: 20px;
		line-height: 40px;
		text-indent: 2em;
	}
}
</style>