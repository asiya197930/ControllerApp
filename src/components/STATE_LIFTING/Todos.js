import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div>
      {/* <h1>{props.data}</h1> */}
      {props.data.map((todo, index) => 
       //   <p key={index}>{todo}</p> 
      <Todo key={index} todo = {todo}/>)}
    </div>
  )
}

export default Todos
