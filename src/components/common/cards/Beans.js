import React, { Component } from "react";

class Beans extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
            <img className="card-img-top" src="http://www.beansandbrews.com/wp/wp-content/images/112-in.jpg" style={{width: "331px", height: "196px"}} alt=""/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">Beans and Brew</p>
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
                    <img src="https://pbs.twimg.com/profile_images/869950951112626176/Tzsb6A6Q_400x400.jpg" alt="" style={{width: "90px", height: "90px", borderRadius:"50%"}}/>
                    </div>

                </div>
            </div>
         )
    }
}
 
export default Beans;