import React, {Component} from "react";

class RedeemButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="button">
                <a href ="/deals">
                <button className="btn btn-lg btn-success btn-block" style={{textAlign: "center", width: "75%", margin: "auto",}}>REDEEM</button>
                </a>
            </div>
            
         )
    }
}
 
export default RedeemButton;