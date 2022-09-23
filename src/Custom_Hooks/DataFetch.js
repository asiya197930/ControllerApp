import React, {useState, useEffect} from 'react'
import useFetch from './useFetch'


const DataFetch = () => {

    const [data, isLoading, error] = useFetch("https://jsonplaceholder.typicode.com/todos")
        const lodingMessage = <p>Todos is loading</p>
        const errorMessage = <p>error</p>

        const todosElement = data && // if todos != null then app function will work
        data.map((todo) => {
           return <p key={todo.id}>{todo.title}</p>
        })
    
      return (
        <div>
         <h1>Todos</h1>
         {error && errorMessage}
         {isLoading && lodingMessage}
         {todosElement}
        </div>
      )
    }
    
    export default DataFetch