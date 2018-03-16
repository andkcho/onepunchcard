import React, { Component } from "react";
import Ramen from "./cards/Ramen";
import Moochies from "./cards/Moochies";
import Redrock from "./cards/Redrock";


class MerchandiseC extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div id="m-carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#m-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#m-carousel" data-slide-to="1"></li>
              <li data-target="#m-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Ramen/>
              </div>
              <div className="carousel-item">
                <Moochies/>
              </div>
              <div className="carousel-item">
                <Redrock/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#m-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#m-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>


          </div>
         )
    }
}
 
export default MerchandiseC;