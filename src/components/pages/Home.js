import React, { Component } from "react";
import NavBar from "../common/NavBar";
import Badges from "../common/Badges";
import MerchantList from "../common/Merchants";
import axios from "axios";
import API from "../../utils/API"



class Home  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: "",
        // merchant:["https://pbs.twimg.com/profile_images/869950951112626176/Tzsb6A6Q_400x400.jpg","https://pbs.twimg.com/profile_images/869950951112626176/Tzsb6A6Q_400x400.jpg","https://pbs.twimg.com/profile_images/751084182999183360/8kat4Yt3_400x400.jpg", null, null, null,],
        merchant:[null,null,null, null, null, null],

        default: "https://png.icons8.com/ios/1600/add.png"
     }
     
       
}

componentDidMount() {
  // console.log(API.userInfo());
  API.checkLogIn();
    API.userInfo().then(res => {
    this.setState({name : res.data.firstname, merchant : res.data.stamps})
  });

  

}

render
  render() { 
    return (
      <div className="home">
        <NavBar/>
        <section className="badge-container">
          <div className="column-badge">
          <h1>Hello, {this.state.name}!</h1>
            {this.state.merchant.map ((merchantStap, idx) => 
            <Badges default={this.state.default} merchant={this.state.merchant[idx]} className="merchant-1" key={idx}/>
            )}

          </div>
        </section>
        <section className="button-container">
            <label className="sr-only">Stamp Code</label>
            <input type="text" id="inputCode" className="form-control" placeholder="ABC1234" required="" style={{textAlign: "center", width: "50%", margin: "auto"}}></input>
            <button className="btn btn-lg btn-primary btn-block" type="submit" style={{textAlign: "center", width: "50%", margin: "auto"}}>Submit Code</button>
        </section>
        <MerchantList/>
      </div>
      //only return one element
      )
  }
}
 
export default Home ;