import React, {Component} from "react";

class UserSignUp extends Component {
    
    render() { 
        return ( 
            <div className="dropinWrapper">
                <h1 className="h3 mb-3 font-weight-normal">Create account</h1>
                <label className="sr-only">First Name</label>
                <input type="text" id="inputFirstName" className="form-control" placeholder="First Name" required="" ></input>
                <label className="sr-only">Last Name</label>
                <input type="text" id="inputLastName" className="form-control" placeholder="Last Name" required="" ></input>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" ></input>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" ></input>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Comfirm Password" required="" autoFocus=""></input>
                {/* <p>passwords do not match</p> */}
                <br/>
                    <a className="nav-link" href="/address">
                        <button className="btn btn-lg btn-primary btn-block" href="/usersignup" type="submit">
                        Next</button>
                    </a>
                <br/>                
            
    
          </div>
         )
    }
}
 
export default UserSignUp ;