import React, {Component} from "react";

class MerchantBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
                <img className="card-img-top" src="http://www.beansandbrews.com/wp/wp-content/images/112-in.jpg" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
            
         )
    }
}
 
export default MerchantBadge;