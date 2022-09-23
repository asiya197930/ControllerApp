import React, { useState } from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(true)
// alert(toggle)

  return (
    <div style={{margin: "1rem", backgroundColor: "lavender", padding: "1rem"}}>
      {/* Short circuit method is nothing but if/else method below */}
      {toggle && (<p>lorem30 dfg 
      rtgj rhjj 5ryjg 4677 ettyty deggyty
      </p>)}
      <div style={{textAlign: "center"}}>
        {/* functional approach of onClick event listener for finishing here*/}
      <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Hide" : "Show"}</button>
      {/* <button onClick={()=>{setToggle(false)}}>Hide</button> */}
      </div>
    </div>
  )
}

export default Toggle
