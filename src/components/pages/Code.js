import React, { Component } from 'react';
import Input from '../../components/Code';

class Code extends Component {
    // state = {
    //   password: "",
    //   username: ""
    // }
    
    // handleChange = (event) => {
    //   const {name, value} = event.target;
    //   this.setState({
    //     [name]: value
    //   });
    // }

    randomString = (length) => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    
    displayCode = ()=>{
    
        let newCode = this.randomString(8);
    
        console.log(newCode)
        axios.post("/newcode", {code: newCode})
            .then(function (res){
                console.log(res)
                $("#codeDisplay").text(res.data.code);
            })
    }
    
    // $(".button").on("click", displayCode)

  render() {
    return (
      <div>
          <h1>create code</h1>
        {/* <Input placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}/> */}
        <br />
        {/* <Input placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/> */}
        <button onClick={() => this.props.displayCode}>Code</button>
      </div>
    );
  }
}

export default Code;