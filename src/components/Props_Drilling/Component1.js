import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './UserContext'

const Component1 = () => {
    const [user, setUser] = useState({id: 101, name: "Asia"})
    const [text, setText] = useState("I am the text")
  return (
    <div>
        <UserContext.Provider value={{user, text}}>
            {/* <Component2 user ={user}/> */}
            <Component2/>
        </UserContext.Provider>
    </div>
  )
}

export default Component1


//Component1 -> Component2 -> Component3 -> Component4
// To avoid props drilling need to use "global state"