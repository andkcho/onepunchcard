import React, {Component} from "react";
import API from "../../utils/API.js";

class UserAddress extends Component {

       // Setting the component's initial state
  state = {
    streetaddress: "",
    state: "AL",
    zipcode: "",
    message: ""
  };



  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    var location = {
        streetaddress: this.state.streetaddress,
        state: this.state.state,
        zipcode: this.state.zipcode
    };
    API.updatelocation(location).then(res => {
        this.setState({message: "Address updated. Press Home to go to your profile!"});
    });
  };

    render() { 
        return ( 
            <div className="dropinWrapper">
            <h1 className="h3 mb-3 font-weight-normal">Your Location</h1>
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
            <p style={{color:"darkblue"}}>{this.state.message}</p>
            <button onClick={this.handleFormSubmit} className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
            <a className="nav-link" href="/home">
                <button className="btn btn-lg btn-primary btn-block" type="submit">HOME</button>
            </a>
            <br/>                
        

      </div>
         )
    }
}
 
export default UserAddress;