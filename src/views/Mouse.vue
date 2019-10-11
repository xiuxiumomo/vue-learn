<template>
	<div id="wrap">
		<div>您的得分是： {{point}}</div>
		<div v-show="isEnd">
			<button @click="reStart">重新开始</button>
		</div>
		<div class="main-box">
			<div v-for="item in mouseArray" :key="item.id" class="item" @click="clickMouseFn(item)">
				<img class="boom" src="../assets/img/boom.png" v-show="item.is_boom" />
				<img class="mouse" src="../assets/img/mouse.png" v-show="item.is_mouse" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Mouse",
	data() {
		return {
			mouseArray: [
				{
					id: 0,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 1,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 2,
					is_mouse: true,
					is_boom: false
				},
				{
					id: 3,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 4,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 5,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 6,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 7,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 8,
					is_mouse: false,
					is_boom: false
				}
			],
			timer: null,
			isEnd: false,
			point: 0,
			disTime: 1000
		};
	},
	watch: {
		point(data) {
			if (data < 1000) {
				this.disTime = 1000;
			} else if (data >= 1000 && data < 2000) {
				this.disTime = 500;
			} else if (data >= 2000 && date < 3000) {
				this.disTime = 300;
			} else {
				this.disTime = 100;
			}
		}
	},
	mounted() {
		this.initMouse();
	},
	methods: {
		clickMouseFn(item) {
			if (this.isEnd) {
				console.log("请重新开始~");
				return;
			}
			clearInterval(this.timer);
			let { mouseArray, point } = this;
			if (item.is_mouse == false && item.is_boom == false) {
				return;
			}
			if (item.is_boom) {
				return;
			}
			if (item.is_mouse) {
				mouseArray[item.id].is_mouse = false;
				mouseArray[item.id].is_boom = true;
				point += 100;
				setTimeout(() => {
					mouseArray[item.id].is_boom = false;
					this.mouseArray = mouseArray;
					this.point = point;
					this.initMouse();
				}, 500);
			}
		},
		randomMouse() {
			let { mouseArray } = this;
			let isAllMouse = mouseArray.every(item => {
				return item.is_mouse == true;
			});
			if (isAllMouse) {
				console.log("结束了~");
				this.isEnd = true;
				clearInterval(this.timer);
				return;
			}
			let Index = Math.floor(Math.random() * 9);
			if (mouseArray[Index].is_mouse == false) {
				mouseArray[Index].is_mouse = true;
				mouseArray[Index].is_boom = false;
				this.mouseArray = mouseArray;
			} else {
				return;
			}
		},
		initMouse() {
			let { disTime } = this;
			this.timer = setInterval(() => {
				this.randomMouse();
			}, disTime);
		},
		reStart() {
            clearInterval(this.timer)
			this.mouseArray = [
				{
					id: 0,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 1,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 2,
					is_mouse: true,
					is_boom: false
				},
				{
					id: 3,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 4,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 5,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 6,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 7,
					is_mouse: false,
					is_boom: false
				},
				{
					id: 8,
					is_mouse: false,
					is_boom: false
				}
			];
			this.disTime = 1000;
			this.isEnd = false;
			this.point = 0;
			this.initMouse();
		}
	}
};
</script>
<style lang="less" scoped>
#wrap {
	width: 100%;
	height: 100%;

	.main-box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 610px;
		height: 610px;
		margin-top: 100px;
		margin-left: 500px;
		background-color: #000;
		border-radius: 20px;
		//animation:roll 10s linear infinite;
		.item {
			width: 200px;
			height: 200px;
			cursor: url("../assets/img/hammer.ico"), default;
			background: url("../assets/img/hole.png") no-repeat center center;
			background-size: cover;
			position: relative;
			.mouse,
			.boom {
				width: 60%;
				height: 60%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				display: inline-block;
			}
		}
	}
}
@keyframes roll {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>