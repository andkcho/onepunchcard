import React, { Component } from "react";


class Badges extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            merchant: "https://pbs.twimg.com/profile_images/869950951112626176/Tzsb6A6Q_400x400.jpg",
            default: "http://res.cloudinary.com/jace-llc/image/upload/v1517693592/c2q33pdudrqfow5wwyr6.jpg"
         }
    }
    render() { 

            return (  
                <div className="badge">
                    <img src={this.state.merchant} alt="" style={{width: "90px", height: "90px"}}/>
                </div>
            )
        }
    }
 
export default Badges;