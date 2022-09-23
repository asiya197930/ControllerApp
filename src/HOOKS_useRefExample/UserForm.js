import React, { useRef } from 'react'

const UserForm = () => {

    const userNameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log("submitted")
        const userName = userNameRef.current.value
        const password = passwordRef.current.value
        userNameRef.current.style.backgroundColor = "red"
        console.log({userName, password})
    }

  return (
    <form onSubmit = {handleSubmit}>
        <div className="form-field" >
         <label htmlFor='userName'>Name: </label>
         <input type="text" id="userName" ref={userNameRef}/>
        </div>
        <div className="form-field" >
         <label htmlFor='password'>Password: </label>
         <input type="password" id="password" ref={passwordRef}/>
        </div>
         <button type='submit'>Register</button>
      </form>
  )
}

export default UserForm
