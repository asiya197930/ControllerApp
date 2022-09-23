import React, {useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { blogsData } from '../Data'

const Blog = () => {
    const {title} = useParams()
    const location = useLocation()
    console.log(location)
    // const [bodyData, setBodyData] = useState(" ") 

    // useEffect(()=>{
    //     const blogData = blogsData.filter((blog) => blog.title === title)
    //     setBodyData(blogData[0].desc)
    // }, [] );

  return (
    <div>
      <h3>{title} Page</h3>
      <p>{location.state.desc.slice(0, 60)}</p>
    </div>
  )
}

export default Blog
