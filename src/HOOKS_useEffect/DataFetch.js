import React, {useState, useEffect} from 'react'


const lodingMessage = <p>Todos is loading</p>
const DataFetch = () => {

const [todos, setTodos] = useState(null)
const [isLoading, setIsLoading] = useState(true) // to show loading
const [error, setError] = useState(null)

     useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                if(!res.ok){
                    throw Error("Fetching is not successfull")
                }
                else{
                    return res.json()
                }
            })
            .then((data) => {
                setTodos(data)
                setIsLoading(false)
                setError(null)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoading(false)
            })
        //setTimeout(()=>{
        // fetch("https://jsonplaceholder.typicode.com/todos") //fetch URL
        // .then((res) => {
        //     return res.json() //return response in json format
        // })
        // .then((data) => {
        //     setTodos(data) // store data using setTodos method
        //     setIsLoading(false)
        //     // console.log(todos)
        // })
        //}, 2000); // to set time use "setTimeout()" and set 2 seconds (2000)

     },[]); // empty dependency ",[]" to stop calling again and again

    const todosElement = todos && // if todos != null then app function will work
    todos.map((todo) => {
       return <p key={todo.id}>{todo.title}</p>
    })

  return (
    <div>
     <h1>Todos</h1>
     {error && <p>{error}</p>}
     {isLoading && lodingMessage}
     {todosElement}
    </div>
  )
}

export default DataFetch
