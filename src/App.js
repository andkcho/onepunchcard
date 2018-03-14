import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserSignUp from "./components/pages/UserSignUp";
import Dropin from "./components/pages/Dropin";
import Home from "./components/pages/Home";
import UserAddress from "./components/pages/UserAddress"
//import Merchant from "./components/pages/MerchantSignUp";
import CreateMerchant from "./components/pages/CreateMerchant";
import BusinessAddress from "./components/pages/BusinessAddress";
import MerchantProfile from "./components/pages/MerchantProfile";
import LogOut from "./components/pages/LogOut";
import History from "./components/pages/History";

const App = () => 
    <Router>
    <div>
      <Route exact path="/usersignup" component={UserSignUp} />
      {/* <Route exact path="/" render={() => this.state.loggedIn ? <Dropin handleLogin={this.loginUser}/> : <Redirect to="/home"/>}/>     */}
      <Route exact path="/" component={Dropin}/>  
      <Route exact path="/home" component={Home}/>  
      <Route exact path="/createmerchant" component={CreateMerchant}/>
      <Route exact path="/address" component={UserAddress}/>
      <Route exact path="/businessaddress" component={BusinessAddress}/>
      <Route exact path="/merchantprofile" component={MerchantProfile}/>
      <Route exact path="/logout" component={LogOut}/>
      <Route exact path="/history" component={History}/>
      </div>
  </Router>;

export default App;
