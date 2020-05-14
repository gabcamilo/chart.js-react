import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart'
import ChartDataForm from './components/ChartDataForm'
import Header from './containers/Header'
import Content from './containers/Content'
import Footer from './containers/Footer'
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
				labels:['A', 'B', 'C', 'D', 'E', 'F', 'G'],
				datasets: [{
          label: 'Line Dataset',
          data: [800, 900, 1100, 600, 800, 1000, 930],
          backgroundColor:'rgba(0, 0, 0, 0)',
          borderColor: 'red',
          // Changes this dataset to become a line
          type: 'line',
          // pointStyle:void ctx.drawImage(logo, 1, 1,1,1),
          pointStyle:'line',
          pointRadius:85,
          pointHoverRadius:72,
          borderWidth:4,
          hoverBorderWidth:3,
          showLine:false
        },{
          type: 'bar',
					label:'Bar Dataset',
					data:[
						1000,
						950,
						800,
						900,
						980,
            1050,
            1200
					],
					backgroundColor:[
						'rgba(255, 99, 132, 0.6)',
						'rgba(54, 162, 235, 0.6)',
						'rgba(255, 206, 86, 0.6)',
						'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            pattern.draw('diagonal', 'rgba(255, 159, 64, 0.6)'),
            pattern.draw('ring', 'rgba(23, 333, 64, 0.6)')
					]
        }],
        customOptions:[{lineGraphHorizontal:true}]
        
			}
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Content>
          <ChartDataForm />
          <Chart chartData={this.state.chartData} location = 'New England'/>
        </Content>
        <Footer />
				{/* <Chart /> */}
      </div>
    );
  }
}

export default App;
