import React from 'react'
import axios from 'axios'
import {Row, Col, Table } from 'react-bootstrap'
import DataRow from './DataRow'
import Char from './Charts'


class Unauth extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            datas: []
        }
    }
    componentDidMount(){
     
    axios.get("https://o418xlwsy1.execute-api.us-east-1.amazonaws.com/run")
    .then(response => this.setState(() => ({ datas: response.data })))
    }
    render(){
        // console.log(this.state.datas)
        return(
            <div>
                <h3>Listing of Vehicles:{this.state.datas.length}</h3>
                <br/><br/>
                <div >
                    <Row>
                    <Col sm={6}>
                        <Table responsive width='10%'>
                            <thead>
                                <tr>
                                    <th>Vehicle no</th>   
                                    <th>Owner Name</th>
                                    <th>Date</th>
                                    <th>No of times Violated</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.datas.map(data => {
                                        return (
                                            <DataRow 
                                            key={data.raw_data.vehicle_no}
                                            {...data.raw_data}/>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={6}><Char /></Col>
                    </Row>
                 </div>
                 
            </div>
           
        )
    }
}
export default Unauth