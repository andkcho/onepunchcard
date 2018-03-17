import React, { Component } from "react";
import NavBar from "../common/NavBar";

class Deals extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="deals">
                <NavBar/>
            </div>
         )
    }
}
 
export default Deals;