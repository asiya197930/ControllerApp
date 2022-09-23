
export const reducer = (state, action) => {
    //action.type and action payload (payload -> it contains a newly added book)
    if(action.type === "ADD"){
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book is added"
        }
    }
    if(action.type === "REMOVE"){
      //remove
      const filteredBooks = [...state.books].filter(
        (book) =>  book.id !== action.payload)
        return {
            ...state,
            books: filteredBooks,
            isModalOpen: true,
            modalText: "Book is removed"
        }
    }
    return state
}