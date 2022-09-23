import React, { useState } from 'react'

import style from './faq.module.css'
const FAQ = ({id, title, desc}) => {
const [toggle, setToggle] = useState(false)

  return (
    <article className={style.faq}>
      <div>
        <h4>{title}</h4>
        <button style={{width: 25, border: "none"}} onClick={()=>{setToggle(!toggle)}}> {toggle ? "-" : "+"} </button>
      </div>
      {/* syntax for short circuit method*/}
      {toggle && (<p>{desc}</p>)}
    </article>
  )
}

export default FAQ
