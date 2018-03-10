import React, {Component} from "react";
import NavBar from "../common/NavBar.js";
import API from "../../utils/API.js";



class CreateMerchant extends Component {

    // Setting the component's initial state
    state = {
        name: "",
        category: "Restaurant",
        logo: ""
    };

    handleInputChange = event => {
        const {name , value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefualt();
            var merchant = {
                name: this.state.name,
                category: this.state.category,
                logo: this.state.logo

            };
        API.updatemerchant(merchant);
    }

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
                    <label className="file-upload-container" htmlFor="file-upload">
                    <img src="https://image.flaticon.com/icons/svg/69/69475.svg" alt="" />
                    <input id="file-upload" type="file" style={{display:"none"}}/>
                    Upload an Image
                  </label>
                  <input type="text" id="inputBusiness" className="form-control" placeholder="IMG URL" required="" autoFocus=""></input>
                    <br/>

                    <a href="/businessaddress">
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.handleFormSubmit} type="submit">Next</button>
                    </a>
                </div>
            </div>
         )
    }
}
 
export default CreateMerchant ;