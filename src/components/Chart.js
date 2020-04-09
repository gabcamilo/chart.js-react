import React, { Component } from 'react'
import {Bar, Line, Chart} from 'react-chartjs-2'


export class ChartComponent extends Component {

	constructor(props){
		super(props);
		this.state={
			chartData:props.chartData
		}

		Chart.plugins.register({
			id: "lineGraphHorizontal",
			afterDatasetsDraw: (chart) => {

				let options = chart.data.customOptions;
				if(!options){
					return;
				}
				let lineGraphHorizontal=options.some((option)=>{
					return option.lineGraphHorizontal===true
				})
				if(!lineGraphHorizontal){
					return;
				}
				
				let lineDatasetIndex;
				let referenceDatasetIndex;
				chart.data.datasets.forEach((dataset,i) => {
					if (dataset.type !== 'line' && dataset.type==='bar'){
						referenceDatasetIndex = i;
					}
					else if (dataset.type === 'line'){
						lineDatasetIndex = i;
					}
				});
				if(referenceDatasetIndex === undefined || lineDatasetIndex === undefined){
					return;
				}

				let barWidth = chart.getDatasetMeta(referenceDatasetIndex).data[0]._model.width;
				let pointRadius=Math.round(barWidth/2);

				//UPDATE CHART
				if(chart.data.datasets[lineDatasetIndex].pointRadius !== pointRadius){
					chart.data.datasets[lineDatasetIndex].pointRadius = pointRadius;
					chart.data.datasets[lineDatasetIndex].pointHoverRadius = pointRadius+2;
					chart.update();
				}
			}
		});
}

	static defaultProps = {
		displayTitle:true,
		displeyLegend:false,
		legendPosition:'right'
	}

	render() {
		return (
			<div className="chart">
				<Bar
					data={this.state.chartData}
					options={{
						title:{
							display:this.props.displayTitle,
							text: `${this.props.title}`,
							fontSize:25
						},
						legend:{
							display:this.props.displeyLegend,
							position:this.props.legendPosition,
							labels:{
								fontColor: '#000'
							}
						},
						scales: {
							yAxes: [{
									ticks: {
											beginAtZero: true
									}
							}]
    				}
					}}
				/>
			</div>
		)
	}
}

export default ChartComponent
