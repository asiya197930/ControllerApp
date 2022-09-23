import React, { useState } from 'react'
import style from './form.module.css';

export default function Form() {

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
  const [user, setUser] = useState({name: " ",email: " ", password: ""}); //taking variables (name, email, password) for object
  const {name, email, password} = user;
  
//   const handleNameChange = (e) => {
//     setUser({name: e.target.value, email, password})
//     //setUser(e.target.value);
//     //console.log(e.target.value)
//   }
//   const handleEmailChange = (e) => {
//     setUser({name, email: e.target.value, password});
//   }
//   const handlePasswordChange = (e) => {
//     setUser({name, email, password: e.target.value});
//   }
const handleChange = (e) => {
    // console.log('change')
    setUser({...user, [e.target.name]: e.target.value}) // value for every name and "...user" -> spread operator
    // const fieldName = e.target.name;
    // if(fieldName === 'name'){
    //     setUser({name: e.target.value, email, password})
    // }
    // else if(fieldName === 'email'){
    //     setUser({name, email: e.target.value, password})
    // }
    // else if(fieldName === 'password'){
    //     setUser({name, email, password: e.target.value})
    // }
}

  const handleSubmit = (e) => {
    console.log("Firm is submitted!")
    // console.log(name, email, password)
    // let userInfo = {
    //     name: name,
    //     email: email,
    //     password: password
    // }
    // console.log(userInfo)
    // let userInfo = {
    //         name,
    //         email,
    //         password
    //     }
    //     console.log(userInfo)
    console.log(user)
    e.preventDefault(); //To stop instant refrash
  }

  return (
    <div>
      <h1>Registration</h1>
      <form action =" " onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label htmlFor='name'>Name: </label>
            <input type="text" name="name" id="name" value={name} onChange={handleChange} required></input>
          </div>
          <div className={style.formGroup}>
            <label htmlFor='email'>Email: </label>
            <input type="email" name="email" id="email" value={email} onChange={handleChange} required></input>
          </div>
          <div className={style.formGroup}>
            <label htmlFor='password'>password: </label>
            <input type="password" name="password" id="password" value={password} onChange={handleChange} required></input>
          </div>
          <div className={style.formGroup}>
            <button type='submit'>Register</button>
          </div>
      </form>
    </div>
  )
}
