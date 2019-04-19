<template>
	<div class = "echartContainer">
		<mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas" />
	</div>
</template>

<script type="text/javascript">
	import echarts from 'echarts';
	import mpvueEcharts from 'mpvue-echarts';

	let chart = null;

	export default{
		data(){
			return {
				echarts,
				//taxResults: this.results,
      			onInit: this.initChart
			}
		},
		props: ['results'],
		methods: {
			initChart(canvas,width,height) {
			  chart = echarts.init(canvas, null, {
			    width: width,
			    height: height
			  });
			  canvas.setChart(chart);

			  var option = {
			  	title: {text: '每月缴税金额'},
				tooltip: {
					show: true,
					trigger: 'axis'
				},
				xAxis:{
					type:'category',
					//data: ['一','二','三','四','五','六','七','八','九','十','十一','十二']
					data: [1,2,3,4,5,6,7,8,9,10,11,12]
				},
				yAxis:{
					name: '金额',
					type: 'value',
					splitLine: {
						lineStyle: {
							type: 'dashed'
						}
					}
					//data: [500,1000,1500,2000,2500,3000,3500]
				},
				series:[{
					type: 'line',
					smooth: true,
			        data: this.results
		    	}]
			  };
			  chart.setOption(option);
			  return chart; // 返回 chart 后可以自动绑定触摸操作
			},
			refreshData(){
				chart.setOption({series:[{data:this.results}]});
			}
		},
		components: {
			mpvueEcharts
		}
	}
</script>

<style>
.echartContainer {
  width: 100%;
  height: 300px;
}
</style>