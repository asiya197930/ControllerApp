import React, {Component} from 'react'

class Card1 extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.Name}</h3>
                <h4>{this.props.Id}</h4>
            </div>
        )
    }
}
export default Card1;