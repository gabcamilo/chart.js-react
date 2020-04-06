import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

export class Chart extends Component {

	constructor(props){
		super(props);
		this.state={
			chartData:props.chartData
		}
	}

	static defaultProps = {
		displayTitle:true,
		displeyLegend:true,
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
							text: `Largest Cities in ${this.props.location}`,
							fontSize:25
						},
						legend:{
							display:this.props.displeyLegend,
							position:this.props.legendPosition,
							labels:{
								fontColor: '#000'
							}
						}
					}}
				/>
			</div>
		)
	}
}

export default Chart
