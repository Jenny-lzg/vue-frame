<template>
	<div>
		<!-- 全局header -->
		<nv-head :page-name="headTit.tab1" :back-type="headTit.back" :click-btn="headTit.right" ></nv-head>
		<section id="wrapper" class="sy_main">
			<h1>格式化时间:{{mytime|getTime}}</h1>
			<hr />
			<h1>到计时:{{countdownTime|getTime}}</h1>
			<button @click="startCountDown">点击开始倒计时</button>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						tab1: '倒计时页面',
						back: 'ok'
					},
					mytime:7123456,
					countdownTime:0
				}
			},
			created: function() {
				this.mytime = this.mytime/1000;
			},
			methods:{
				startCountDown:function(){
					console.log("aa");
					let _this = this;
					_this.countdownTime = 7123456 / 1000;
					_this.setintervalId = setInterval(function(){
						_this.countdownTime--;
						if(_this.countdownTime<=0){
							clearInterval(_this.setintervalId);
						}
					},1000);
				}
			},
			components: {
				"nvHead": require('../components/header.vue'),
			},
	}
</script>
<style lang="sass" scoped>
	section {
		background: rgb(255, 255, 255);
		h1{
			font-size:26px;
			text-align:center;
			color:dodgerblue;
			padding:14px;
		}
		button{
			width:240px;
			height:60px;
			font-size:20px;
			color:red;
			font-weight:600;
		}
	}
</style>