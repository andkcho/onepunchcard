import React, {Component} from "react";
import Skin from "./cards/Skin";
import StarBucks from "./cards/StarBucks";
import RoastingCo from "./cards/RoastingCo";

class SelfcareCarousel extends Component {
    render() { 
        return ( 
          <div>
            <div id="selfcare-carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#selfcare-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#selfcare-carousel" data-slide-to="1"></li>
              <li data-target="#selfcare-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Skin/>
              </div>
              <div className="carousel-item">
                <StarBucks/>
              </div>
              <div className="carousel-item">
                <RoastingCo/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#selfcare-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#selfcare-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>


          </div>
          
          
         )
    }
}
 
export default SelfcareCarousel;