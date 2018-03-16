import React, {Component} from "react";
import API from "../../utils/API.js";

class UserSignUp extends Component {
    // Setting the component's initial state
  state = {
    email: "",
    password: "",
    passwordConf: "",
    firstname: "",
    lastname: "",
    passwordErr: "",
    successMsg: ""

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
    var cpassword = this.state.passwordConf;
    var user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password:  this.state.password,
      passwordConf: this.state.passwordConf
    };
    if (cpassword !== user.password){
        // display error
        this.setState({passwordErr: "Passwords do not match! Please try again."})
        console.log("error, password does not match")
    } else {
      this.setState({passwordErr: "", successMsg: "You are now signed up. Please press next."});
      API.signup(user).then(res => {
        var login = {
          email: this.state.email,
          password:  this.state.password
        }
        API.login(login);
         });
    }  
  };
    
    render() { 
        return ( 
            <div className="dropinWrapper">
                <h1 className="h3 mb-3 font-weight-normal">Create account</h1>
                <input
                  className="form-control"
                  value={this.state.firstname}
                  name="firstname"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="form-control"
                  value={this.state.lastname}
                  name="lastname"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className="form-control"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="form-control"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Password"
                />
                <input
                  className="form-control"
                  value={this.state.passwordConf}
                  name="passwordConf"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Confirm Password"
                />
                <p style={{color:"red"}}>{this.state.passwordErr}</p>
                <p style={{color:"dark blue"}}>{this.state.successMsg}</p>
                <br/>
                <button onClick={this.handleFormSubmit} className="btn btn-lg btn-primary btn-block" >Sign Up</button>
                <a className="nav-link" href="/address">
                  <button className="btn btn-lg btn-primary btn-block">Next</button>
                </a>
                <br/>                
            
    
          </div>
         )
    }
}
 
export default UserSignUp ;