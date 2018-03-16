import React, {Component} from "react";
import Beans from "./cards/Beans";
import StarBucks from "./cards/StarBucks";
import RoastingCo from "./cards/RoastingCo";

class AutoCarousel extends Component {
    render() { 
        return ( 
          <div>
            <div id="Auto-carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#Auto-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#Auto-carousel" data-slide-to="1"></li>
              <li data-target="#Auto-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Beans/>
              </div>
              <div className="carousel-item">
                <StarBucks/>
              </div>
              <div className="carousel-item">
                <RoastingCo/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#Auto-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#Auto-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>


          </div>
          
          
         )
    }
}
 
export default AutoCarousel;