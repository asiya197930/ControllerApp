import React, { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

export default class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    const {isLoggedIn}= this.state
    // let element;
    // if(this.state.isLoggedIn) // without destructuring
    // if(isLoggedIn){
    //     return <HomePage/>
    // }
    // else{
    //     return <LogInPage/>
    // }
    // if(isLoggedIn){  // rendering using element variable
    //     element = <HomePage/>
    // }
    // else{
    //     element = <LogInPage/>
    // }

    // element = isLoggedIn ? <HomePage/> : <LogInPage/> //rendering using ternary operator
    return(
        <div>
         {isLoggedIn ? <HomePage/> : <LogInPage/>} 
        </div>
    ) 
  }
}
