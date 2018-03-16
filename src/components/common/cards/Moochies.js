import React, { Component } from "react";

class Moochies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
            <img className="card-img-top" src="https://media-cdn.tripadvisor.com/media/photo-s/02/bf/eb/f1/moochies.jpg" style={{width: "331px", height: "196px"}} alt=""/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">Moochies</p>
                        </div>
                        <div>
                        <div className="star-ratings-css">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <button type="button" className="btn btn-primary" style={{float: ""}}>Visit</button>
                        </div>
                    </div>
                    <div className="stamp" style={{float: "right"}}>
                    <img src="https://www.moochiesmeatballs.com/wp-content/uploads/2014/05/moochies.png" alt="" style={{width: "90px", height: "90px", borderRadius:"50%"}}/>
                    </div>

                </div>
            </div>
         )
    }
}
 
export default Moochies;