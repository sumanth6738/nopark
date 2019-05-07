import React from "react";
import axios from 'axios'
import Chart from 'react-google-charts'
//var Pro = require('react-progressbar');

class Char extends React.Component {
    constructor(){
        super()
        this.state = {
            results: [],  
            isloaded: false
        }
    }

    componentDidMount(){ 
        axios.get('https://o418xlwsy1.execute-api.us-east-1.amazonaws.com/run')
        .then(response => {
          this.setState(() => ({results: response.data,isloaded: true})) 
        })
       
        .catch(err => {
          console.log(err)
        })
       
    }
    

    
    render(){
        const data = [ ["vehicle_no", "count"]]
            this.state.results.forEach(result => {
                 data.push([result.raw_data.vehicle_no, Number(result.raw_data.count)])
                
            })
            // const data1 = [ ["Date","No of vehicles" ]]
            // this.state.results.forEach(result => {
            //      data1.push([ result.raw_data.Date, Number(result.raw_data.count.length)])
                
            // })
            
    
        
        // console.log("hi this is data")
        console.log(data)
       // console.log(data1)
        return(
            <div className={"my-pretty-chart-container"}>
            {this.state.isloaded && ( 
                <div>
                    <h3>Graph:</h3>
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="400px"
                        data = {data}
                    />
                     {/* <Chart
                        chartType="BarChart"
                        width="100%"
                        height="400px"
                        data = {data1}
                    /> */}
                </div>
                )
            }
            
          </div>
        )
    }

}
export default Char