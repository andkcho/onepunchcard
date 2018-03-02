import React, { Component } from "react";
import "../../index.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    name: ""
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

    // Alert the user their first and last name, clear `this.state.name` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.name}, thanks for signing up!`);
    this.setState({
      name: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
       <div className="dropinWrapper">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""></input>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="********" required="" autofocus=""></input>
        {/* <p>Email address or password is incorrect</p> */}
        <br></br>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <a className="nav-link" href="/usersignup">
          <button className="btn btn-lg btn-primary btn-block" href="/usersignup" type="submit">
          Sign up</button>
        </a>
        

      </div>

    );
  }
}

export default Form;
