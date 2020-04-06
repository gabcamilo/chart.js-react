import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'
import pattern from 'patternomaly'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
				labels:['Boston', 'Worcester', 'Providence', 'Springfield', 'Bridgeport', 'New Haven'],
				datasets: [{
					label:'Population',
					data:[
						617594,
						184045,
						178042,
						153060,
						144229,
						129779
					],
					backgroundColor:[
						'rgba(255, 99, 132, 0.6)',
						'rgba(54, 162, 235, 0.6)',
						'rgba(255, 206, 86, 0.6)',
						'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            pattern.draw('diagonal', 'rgba(255, 159, 64, 0.6)')
					]
				}]				
			}
    })
  }

  render(){
    return (
      <div className="App" style={{padding: 5 + 'em'}}>
        <Chart chartData={this.state.chartData} location = 'New England'/>
      </div>
    );
  }
}

export default App;
