import React, { Component } from 'react'

export default class EVENT_HANDLER_CLASS extends Component {

    // handleClink = ()=>{
    //     console.log('Clicked')
    // }
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : ''
      }
    }
    
       handleOnChange = (e) => {
           //console.log(e.target.value);
           this.setState({
            changedValue : e.target.value
           }, () =>{
            console.log(this.state.changedValue)
           })
           //console.log(this.state.changedValue)
       }

  render() {
    return (
      <div>
        {/* <button onClick={this.handleClink}>Click here</button> */}
        <input type="text" onChange={this.handleOnChange}/>
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
