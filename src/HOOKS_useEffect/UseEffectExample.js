import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {

    const [count, setCount] = useState(0)
    const [isLoding, setIsLoding] = useState(false)
    // const handleOnChange = () => {
    //     setCount((count) => count + 1)
    // }
    useEffect(() => {
        //call with every time
      console.log ("useEffect")
    }, [count]) //1)call with only first time then need to use an empty array "[]"; 2) but "[count]" -> dependent on count and first rendering;
   // Moreover, "[count, ....]" . It's for more dependency

  return (
    <div>
        {console.log("Rendering")}
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count+1)}>Press Me</button>
      <button onClick={() => setIsLoding(!isLoding)}>Press Again</button>
    </div>
  )
}

export default UseEffectExample
