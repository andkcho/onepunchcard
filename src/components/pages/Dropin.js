import React, { Component } from "react";
//import "./Form.css";

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
      <div>
        
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
          />
          <button className="btn btn-primary" onClick={this.handleFormSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Form;
