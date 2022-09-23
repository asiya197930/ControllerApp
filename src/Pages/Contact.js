import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>React Router is a fully-featured client and server-side routing library for 
        React, a JavaScript library for building user interfaces. React Router runs 
        anywhere React runs; on the web, on the server with node.js, and on React Native.
      </p>
      <p>React Router is a fully-featured client and server-side routing library for 
        React, a JavaScript library for building user interfaces. React Router runs 
        anywhere React runs; on the web, on the server with node.js, and on React Native.
      </p>
      <button onClick={()=>{navigate("/")}}>Go To HomePage</button>
    </div>
  )
}

export default Contact
