import React, { useReducer, useState } from 'react'

import {reducer} from './reducer'
const booksData = [
    {
        id: 1, 
        name: "Pather Panchal"
    },
    {
        id: 2, 
        name: "Padma Nadir Majhi"
    },
    {
        id: 3, 
        name: "Srikanta"
    }
]

const Modal = ({modalText}) => {
    return <p>{modalText}</p>
}

const UseReducer = () => {
    // const [books, setBooks] = useState(booksData)
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const [modalText, setmodalText] = useState("")
    const [bookName, setBookName] = useState(" ")

    const initialState ={
        books: booksData,
        isModalOpen: false,
        modalText: ""
    }
    const [bookState, dispatch] = useReducer (reducer, initialState)

    const handleSubmit = (e) => {
       e.preventDefault()
       const newBook = {id: new Date().getTime().toString(), name: bookName}
       dispatch({type: "ADD", payload: newBook})
       setBookName(""); //after addition value will be empty

    //    console.log("submitted")
    // alert(bookName)

    // setBooks((previous) =>{
    //     const newBook = {id: new Date().getTime().toString(), name: bookName}
    //     return [...previous, newBook]
    // })
    // setIsModalOpen(true);
    // setmodalText("Book is added")
    }
    
   const removeBook = (id) => {
       dispatch({type: "REMOVE", payload: id})
   }

  return (
    <div>
      <h3>Book List</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={bookName} onChange={(e)=> {setBookName(e.target.value);}}/>
        <button type='submit'>Add Book</button>
      </form>

     {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}

      {bookState.books.map((book)=>{
        const {id, name} = book;
        return <li key={id}>
        {name} 
        <button onClick = {()=>{removeBook(id)}} style ={{margin: 8}}>Remove</button>
        </li>
      })}
    </div>
  )
}

export default UseReducer
