import React, {Component} from "react";
import NavBar from "../common/NavBar.js";

class CreateMerchant extends Component {
    render() { 
        return ( 
            <div className="Merchant">
                <NavBar/>
                <div className="dropinWrapper">
                    <h1 className="h3 mb-3 font-weight-normal">Add your business</h1>
                    <input type="text" id="inputBusiness" className="form-control" placeholder="Business Name" required="" autoFocus=""></input>
                    <select className="form-control">
                        <option value="">Category</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Coffee Shop">Coffee Shop</option>
                        <option value="Merchandise">Merchandise</option>
                        <option value="Self Care">Self Care</option>
                        <option value="Automotive">Automotive</option>
                    </select>
                    <br/>
                    <a href="/businessaddress">
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Join</button>
                    </a>
                </div>
            </div>
         )
    }
}
 
export default CreateMerchant ;