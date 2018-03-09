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
        console.log("error, password does not match")
    } else {API.signup(user);}  
  };
    
    render() { 
        return ( 
            <div className="dropinWrapper">
                <h1 className="h3 mb-3 font-weight-normal">Create account</h1>
                <label className="sr-only">First Name</label>
                <input
                className="form-control"
                value={this.state.firstname}
                name="firstname"
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name"
                />
                {/* <input type="text" id="inputFirstName" className="form-control" placeholder="First Name" required="" ></input> */}
                <label className="sr-only">Last Name</label>
                <input
                className="form-control"
                value={this.state.lastname}
                name="lastname"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
                />
                {/* <input type="text" id="inputLastName" className="form-control" placeholder="Last Name" required="" ></input> */}
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input
                className="form-control"
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Email"
                />
                {/* <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" ></input> */}
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input
                className="form-control"
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Password"
                />
                {/* <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" ></input> */}
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input
                className="form-control"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Confirm Password"
                />
                {/* <input type="password" id="inputPasswordConf" className="form-control" placeholder="Confirm Password" required="" autoFocus=""></input> */}
                {/* <p>passwords do not match</p> */}
                <br/>
                <button onClick={this.handleFormSubmit} className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                    <a className="nav-link" href="/address">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Next</button>
                    </a>
                <br/>                
            
    
          </div>
         )
    }
}
 
export default UserSignUp ;