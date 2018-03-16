import React, { Component } from "react";

class Ramen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
            <img className="card-img-top" src="http://www.jinya-la.com/images/main_image_1.jpg" style={{width: "331px", height: "196px"}} alt=""/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">Jinya Ramen House</p>
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
                    <img src="https://beeralien.com/wp-content/uploads/2015/12/jinya_logo.png" alt="" style={{width: "90px", height: "90px", borderRadius:"50%"}}/>
                    </div>

                </div>
            </div>
         )
    }
}
 
export default Ramen;