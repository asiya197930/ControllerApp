import React, { useState } from 'react'

const NewTodo = (props) => {

    const [todo, setTodo] = useState(" ")
    
    const handleChange = (event) => {
        setTodo(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.onTodo(todo)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>New Todo: </label>
        <input type='text' id='todo' name='todo' value={todo} onChange={handleChange} />
        <button>Add todo</button>
      </form>
      </div>
  )
}

export default NewTodo
