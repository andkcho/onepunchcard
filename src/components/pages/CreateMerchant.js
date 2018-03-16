import React, {Component} from "react";
import NavBar from "../common/NavBar.js";
import API from "../../utils/API.js";



class CreateMerchant extends Component {

    // Setting the component's initial state
    state = {
        name: "",
        category: "Restaurant",
        logo: "",
        streetaddress: "",
        state: "Alabama",
        zipcode: ""
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
                logo: this.state.logo,
                streetaddress: this.state.streetaddress,
                state: this.state.state,
                zipcode: this.state.zipcode

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
                    {/* <label className="file-upload-container" htmlFor="file-upload">
                    <img src="https://image.flaticon.com/icons/svg/69/69475.svg" alt="" />
                    <input id="file-upload" type="file" style={{display:"none"}}/>
                    Upload an Image
                  </label> */}
                        <input
                            className="form-control"
                            value={this.state.logo}
                            name="logo"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="img url"
                        />
                        <input
                            className="form-control"
                            value={this.state.streetaddress}
                            name="streetaddress"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Street Address"
                        />
                <select name="state" value={this.state.state} className="form-control" onChange={this.handleInputChange}>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <input
                    className="form-control"
                    value={this.state.zipcode}
                    name="zipcode"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Zip Code"
                />
                <br/>
                <button onClick={this.handleFormSubmit} className="btn btn-lg btn-primary btn-block" type="submit">Create</button>

                <br/>                
        

      </div>
            </div>
         )
    }
}
 
export default CreateMerchant ;