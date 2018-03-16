import React, { Component } from "react";
import API from "../../utils/API";




class LogOut  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        
     }
         
}

componentDidMount() {
  API.logout();
}

render
  render() { 
    
    return (
      <div >
       THANKS FOR STOPPING BY!

       <a className="nav-link" href="/" style={{float: "right"}}>RESET</a>
      </div>

      )
  }
}
 
export default LogOut ;