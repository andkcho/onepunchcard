import React, { Component } from "react";
import NavBar from "../common/NavBar";
import MerchantBadge from "../common/MerchantBadge";


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
                    <MerchantBadge/>
                </div>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Card Booster
                            </button>
                            </h5>
                        </div>
          
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    ........
                </div>
              </div>
            </div>
        </div>
                
            
            
            </div>
         )
    }
}
 
export default MerchantProfile;