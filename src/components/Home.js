import React from 'react'
import { Row, Col } from 'react-bootstrap'
import tc from '../images/tc.png'
const Home = () => {
    return(
        <div className="container-fluid">
             
         
            <Row>
              <Col sm={1}></Col>
              <Col sm={10}>  <h5 align="justify">
         Bengaluru city has witnessed a phenomenal growth in vehicle population.
         As a result many of the arterial roads and intersections are prone to parking problems. 
         The number of towing cases registered in Bengaluru in the year 2017 was 270449, while in the year 2018(till Feb), the number increased to 29456 cases. 
         </h5>
         </Col>
         </Row>
         <Row>
         <Col sm={1}></Col>
            <Col sm={4}>  
         
         <img src={tc} alt="" width="700px" height="400px" />
         <center> <h6 style={{color:'red'}}>resource: Bengaluru Traffic Police</h6></center>
         </Col>
         <Col sm={2}></Col>
         <Col sm={4}>  
         <br/>
         <h5 align="justify">
         By looking at this statistics, there is a need for design and development of a smart control system for effective parking management.
        In spite of “No Parking” boards put up on the streets, owners still park their vehicles in areas where parking is prohibited. 
        Further, these vehicles are towed off by RTO personnel or traffic police and the owners are imperiled to pay fine. Not only in public places but in many educational 
        institutions, hospitals and secluded infrastructures, it creates chaos in parking management. 
         <br/> 
         <br/>To address this issue, the study aims to design and develop a smart system which alerts the vehicle owners at first. If the caution is ignored, then the vehicle 
          information is processed and stored in a cloud. That can be accessed or transferred to concerned authorities.
          <br/> 
         <br/>
         </h5>
         </Col>
         </Row>
         <Row>
         <Col sm={1}></Col>
             <Col sm={10}> <h5 align="justify">
         Here we use RFID, it is a generic technology that helps in identification of objects through radio waves. It is part of a range of technologies that enables 
          wireless data transmission and automated data collection which may include optical card readers, smart cards, bar codes etc.
        
         </h5>
         </Col>
              
            </Row>
           
       
            
        </div>
    )
}
export default Home