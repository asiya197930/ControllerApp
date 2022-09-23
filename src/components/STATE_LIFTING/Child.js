import React from 'react'

const Child = (props) => {

    const data1 = "I am from child component";
        props.onChildData(data1);

  return (
    <div>
     <p>I'm from child</p>
     <p>{props.Data}</p>
    </div>
  )
}

export default Child
