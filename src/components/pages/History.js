import React, { Component } from "react";
import NavBar from "../common/NavBar";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <NavBar/>
        "google map w/pins"

        <div className="container">
          <img src="/w3images/bandmember.jpg" alt="Avatar" style={{width:"100%"}}/>
          <p>Hello. How are you today?</p>
          <span className="time-right">11:00</span>
        </div>
        <div className="container">
          <img src="/w3images/bandmember.jpg" alt="Avatar" style={{width:"100%"}}/>
          <p>Hello. How are you today?</p>
          <span className="time-right">11:00</span>
        </div>

      </div>
     )
  }
}
 
export default History;