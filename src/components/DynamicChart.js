import React, { Component } from 'react';
import CanvasJSReact from '../assets/Canvajs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [{x: 1, y: 20}];   //dataPoints.
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

		fetch('https://1w6w07injl.execute-api.us-east-2.amazonaws.com/dev/getmostrecenthumiditydatafromdb')
		.then((response) => response.json())
		.then(
			(res) => {
				console.log(res);
				if (res.body.Rows.length != 0) {
					boardId = parseInt(res.body.Rows[0].Data[0].ScalarValue);
					yVal = parseFloat(res.body.Rows[0].Data[2].ScalarValue);
				}
				yVal = null;
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
				text: "Humidity 203"
			},
			data: [{
				type: "line",
				dataPoints : dps
			}]
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