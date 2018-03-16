import React, { Component } from "react";

class StarBucks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
            <img className="card-img-top" src="https://johnfawkes.com/wp-content/uploads/2017/11/starbucks-Noticia-751439.jpg" style={{width: "331px", height: "196px"}} alt=""/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">Starbucks</p>
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
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81Nz6ZX8HhL._SY355_.jpg" alt="" style={{width: "90px", height: "90px", borderRadius:"50%"}}/>
                    </div>

                </div>
            </div>
         )
    }
}
 
export default StarBucks;