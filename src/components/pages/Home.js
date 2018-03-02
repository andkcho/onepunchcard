import React, { Component } from "react";
import NavBar from "../common/NavBar";
import Badges from "../common/Badges";
import MerchantList from "../common/Merchants";


class Home  extends Component {
  render() { 
    return (
      <div className="home">
        <NavBar/>
        <section className="badge-container">
          <div className="column-badge">
            <Badges className="merchant-1"/>
            <Badges className="merchant-2"/>
            <Badges className="merchant-3"/>
            <Badges className="merchant-4"/>
            <Badges className="merchant-5"/>
            <Badges className="merchant-6"/>

          </div>
        </section>
        <section className="button-container">
            <label className="sr-only">Stamp Code</label>
            <input type="text" id="inputCode" className="form-control" placeholder="ABC1234" required="" style={{textAlign: "center"}}></input>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit Code</button>
        </section>
        <MerchantList/>
      </div>
      //only return one element
      )
  }
}
 
export default Home ;