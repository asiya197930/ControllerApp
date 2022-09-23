import React, { useState } from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';

const dummytodos = ['todo1', 'todo2', 'todo3'];

const Home = () => {
    const [todos, setTodos] = useState(dummytodos);

    const handleNewTodo = (NewTodo) => {
        setTodos([...todos, NewTodo])
    }
  return (
    <div>
      <NewTodo onTodo = {handleNewTodo}/>
      <Todos data = {todos}/>
    </div>
  )
}

export default Home;
