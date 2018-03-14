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
        // console.log(this.state)
    };

    handleFormSubmit = event => {
        event.preventDefault();
            var merchant = {
                name: this.state.name,
                category: this.state.category,
                logo: this.state.logo

            };
            console.log("submit fired")
        API.createmerchant(merchant);
    }

    render() { 
        return ( 
            <div className="Merchant">
                <NavBar/>
                <div className="dropinWrapper">
                    <h1 className="h3 mb-3 font-weight-normal">Add your business</h1>
                    <label className="sr-only">Business Name</label>
                        <input
                        className="form-control"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Business Name"
                        />
                        
                        <select name="category" value={this.state.category} className="form-control" onChange={this.handleInputChange}><option value="">Category</option>
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
                  <label className="sr-only">Logo</label>
                        <input
                        className="form-control"
                        value={this.state.logo}
                        name="logo"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="img url"
                        />
                    <br/>

                    {/* <a href="/businessaddress"> */}
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.handleFormSubmit} >Next</button>
                    {/* </a> */}
                </div>
            </div>
         )
    }
}
 
export default CreateMerchant ;