import React, { useState } from 'react'
import User from './User'

const Users = () => {
    const [userNamee, setUserNamee] = useState({name: "Achhiya Sultana", ID: 1821707})
    const [userName, setUserName] = useState("Achhiya Sultana")
    const [userId, setUserId] = useState(1821707)
  return (
    <div>
      <User userName = {userName} userNamee={userNamee} userId = {userId}/>
    </div>
  )
}

export default Users
