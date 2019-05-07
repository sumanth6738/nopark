import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import About from './components/About.js'
import Contact from './components/Contact'
import Home from './components/Home'
import Unauth from './components/nopark'




class App extends React.Component {
render(){
  return (
    <BrowserRouter>
      <div className='container-fluid'> 
      <div>
      <Row >
        <Col> <h1 style={{color:"hsl(0, 100%, 75%)"}}>Unauthorised Parking System</h1></Col>
          <Col md={3}>
          <Link to="/home" > Home </Link> || 
          <Link to="/unauthorisedparking" > Unauthorised Parking </Link> || 
          <Link to="/about"> AboutUs </Link> || 
          <Link to="/contact"> Contact</Link> 
        </Col>
      </Row>
      
      
     
     
      </div>

     <hr/>
      <Switch>
      
      <Route path="/home" component = {Home} exact={true} />
      <Route path="/unauthorisedparking" component = {Unauth}/>
      <Route path="/about" component = {About}/>
      <Route path="/contact" component = {Contact}/>
      </Switch>
      </div>
</BrowserRouter>
  );
}
}

export default App;
