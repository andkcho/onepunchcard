import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dropin from "./components/pages/Dropin";
import Code from "./components/pages/Code";
//import UserLocation from "./components/pages/UserLocation";
//import Home from "./components/pages/Home";
//import Merchant from "./components/pages/MerchantSignUp";

const App = () => 
    <Router>
    <div>
      {/* <Route exact path="/signup" component={Form} /> */}
      <Route exact path="/" component={Dropin} />   
      <Route exact path="/code" component={Code} />    
      {/* <Route exact path="/inputlocation" component={UserLocation} />   */}
      {/* <Route exact path="/home" component={Home}/>   */}
      {/* <Route exact path="/merchant" component={Merchant}/> */}
      </div>
  </Router>;

export default App;
