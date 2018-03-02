import React, { Component } from "react";
import NavBar from "../common/NavBar";
import MerchantBadge from "../common/MerchantBadge";
import MerchantCarousel from "../common/MerchantCarousel";

class MerchantProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="profile">
            <NavBar/>
                <div>
                    <MerchantCarousel/>
                </div>
            
            
            </div>
         )
    }
}
 
export default MerchantProfile;