import React, { Component } from "react";
import NavBar from "../common/NavBar";
import Badges from "../common/Badges";
import MerchantList from "../common/Merchants";
// import axios from "axios";
import API from "../../utils/API";
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import Modal from "../common/Modal";



class Home  extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = { 
        name: "",
        // merchant:["https://pbs.twimg.com/profile_images/869950951112626176/Tzsb6A6Q_400x400.jpg","https://pbs.twimg.com/profile_images/869950951112626176/Tzsb6A6Q_400x400.jpg","https://pbs.twimg.com/profile_images/751084182999183360/8kat4Yt3_400x400.jpg", null, null, null,],
        merchant:[null,null,null, null, null, null],

        default: "https://png.icons8.com/ios/1600/add.png",
        notLoggedIn: true,
        code: ""
     }
         
}

componentWillMount() {

  API.checkLogIn().then(res => {
    console.log(res.data.loggedIn)
    if (res.data.loggedIn == true) {
      this.setState({notLoggedIn: false})
      // console.log(this.state.notLoggedIn)
    }
  });
  API.userInfo().then(res => {
      console.log(res.data);
    this.setState({name : res.data.firstname, merchant : res.data.stamps})
  });
  //input a MERCHANT code # to save into the userbadge DB []
  

}

componentDidMount() {
  console.log(this.state.picture)
}

handleFormSubmit = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();
  var code= this.state.code;  
  API.submitCode(code);
};

handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const { name, value } = event.target;

  // // Updating the input's state
  this.setState({
    [name]: value
  });
};



render
  render() { 
    
    return (
      <div className="home">
        <NavBar/>
        {/* {this.state.notLoggedIn ? null : <Redirect to="/" />} */}
        <section className="badge-container">
          <div className="column-badge">
         
            {this.state.merchant.map ((merchantStap, idx) => 
            <Badges default={this.state.default} merchant={this.state.merchant[idx]} className="merchant-1" key={idx}/>
            )}

          </div>
        </section>
        <section className="button-container">
            <label className="sr-only">Stamp Code</label>
            <input type="text" id="inputCode" className="form-control" placeholder="ABC1234" name="code" onChange={this.handleInputChange} value={this.state.code} style={{textAlign: "center", width: "75%", margin: "auto"}}/>
            <button onClick={this.handleFormSubmit} className="btn btn-lg btn-primary btn-block" style={{textAlign: "center", width: "75%", margin: "auto",}}>Submit Code</button>
            
        </section>
        <MerchantList/>
        <Modal/>
        
      </div>
      //only return one element
      )
  }
}
 
export default Home ;