import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    // const {userId} = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams.get("id"))
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchParams({name: name, age: age});
    }

  return (
    <div>
      {/* User <h1>{userId}</h1> */}
      <h2>User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder = "name" onChange ={(e)=>{
            setName(e.target.value)
        }}/>
        <input type="text" value={age} placeholder = "age" onChange ={(e)=>{
            setAge(e.target.value)
        }}/>
        <button type="submit">Add Name</button>
      </form>
      {/* <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("name")}</h1>
      <h1>{searchParams.get("age")}</h1> */}
    </div>
  )
}

export default User
