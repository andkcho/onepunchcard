import React, { Component } from "react";


class Badges extends Component {
    state = {
        picture: "hello"
    }
    //every time the pages loads to the following
    componentDidMount() {
        console.log(this.state.picture)
    }
    //=======================================
    render() { 

            return (  
                <div className="badge">
                    {this.props.merchant ? <img src={this.props.merchant} alt="" style={{width: "90px", height: "90px"}} idx={this.props.idx}/> : <img src={this.props.default} alt="" style={{width: "90px", height: "90px"}} idx={this.props.idx}/>}

                </div>

            )
        }
    }
 
export default Badges;