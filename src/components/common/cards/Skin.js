import React, { Component } from "react"

class Skin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
            <img className="card-img-top" src="http://nebula.wsimg.com/38c54b65659d213c7a943ec67927b0a4?AccessKeyId=0C5529D74B375C363FBD&disposition=0&alloworigin=1" style={{width: "331px", height: "196px"}} alt=""/>
                <div className="card-body" >
                    <div className="material" style={{float: "left"}}>
                        <div>
                        <p className="card-text">SkinNomenal</p>
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
                    <img src="http://nebula.wsimg.com/96d5de74cb91cb6a9a7c3d784f1dfe23?AccessKeyId=0C5529D74B375C363FBD&disposition=0&alloworigin=1" alt="" style={{width: "90px", height: "90px", borderRadius:"50%"}}/>
                    </div>

                </div>
            </div>
         )
    }
}
 
export default Skin;