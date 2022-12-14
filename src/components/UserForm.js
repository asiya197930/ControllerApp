import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

const UserForm = ({handleSubmitData, selectedUser, btnText}) => {
    const [user, setUser] = useState({
        username:'',
        email:''
    })

const {username, email} = user;

useEffect(()=>{
    setUser({
        username: selectedUser.username,
        email: selectedUser.email,
    });
},[selectedUser]);

const handleChange = (e) => {
     const selectedName = e.target.name
     const selectedValue = e.target.value
     setUser(prevState => {
        return {
            ...prevState, [selectedName]: selectedValue
        }
     })
}

const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(user)
    handleSubmitData(user);
    setUser({
        username:'',
        email:''
    })
}

  return (
    <form onSubmit={handleSubmit} className='form'>
        <div className='field-group'>
           <label htmlFor='username'>UserName:</label>
           <input type='text' id='username' name='username' 
           value={username} onChange={handleChange} required/>
        </div>
        <div className='field-group'>
           <label htmlFor='email'>Email:</label>
           <input type='email' id='email' name='email' 
           value={email} onChange={handleChange} required/>
        </div>
        <button type='submit' className='bttn'>{btnText}</button>
    </form>
  )
}

// UserForm.propTypes = {
UserForm.defaultProps = {
 selectedUser: {
    username:'',
    emaul:'',
 }
}

export default UserForm

