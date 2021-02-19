import React, { Component } from 'react';
import CanvasJSReact from '../assets/Canvajs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [{x: 1, y: null}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = null;
var boardId = null;
var updateInterval = 1000;

class DynamicLineChart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {

		fetch('https://r0s3d5fz4k.execute-api.us-east-2.amazonaws.com/dev/getMostRecentTemperatureDatafromDB101')
		.then((response) => response.json())
		.then(
			(res) => {
				console.log(res);
				if (res.body.Rows.length != 0) {
					boardId = parseInt(res.body.Rows[0].Data[0].ScalarValue);
					yVal = parseFloat(res.body.Rows[0].Data[2].ScalarValue);
				} else {
					yVal = null;
				}
			},
			(error) => {
				yVal = null;
			}
		);

		dps.push({x: xVal, y: yVal});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
	}
	render() {
		const options = {
			title :{
				text: "Temperature 101"
			},
			data: [{
				type: "line",
				dataPoints : dps
			}],
			axisX:{
				interval: 1,
			},
		}
		
		return (
		<div>
			<h1>React Dynamic Line Chart</h1>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DynamicLineChart;