import React, { Component } from "react";
import "../../index.css";
import API from "../../utils/API.js";
import { Redirect } from 'react-router-dom'

class Form extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: "",
    loggedIn: false
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
    var user = {
      email: this.state.email,
      password:  this.state.password
    };
    API.login(user).then(res => {
      this.setState({loggedIn : true})
    });    
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
       <div className="dropinWrapper">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
        {/* <p>Email address or password is incorrect</p> */}
        <br></br>
        <button onClick={this.handleFormSubmit} className="btn btn-lg btn-primary btn-block">Sign in{this.state.loggedIn && <Redirect to="/home"/>}</button>
        <a className="nav-link" href="/usersignup">
          <button className="btn btn-lg btn-primary btn-block" href="/usersignup" type="submit">
          Sign up</button>
        </a>
        

      </div>
   
    );
  }
}

export default Form;
