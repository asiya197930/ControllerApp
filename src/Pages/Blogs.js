import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { blogsData } from '../Data'

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData)
    // console.log(blogs)
    const truncateString = (str, num) => {
        if(str.length > num){
        return str.slice(0, num) + "..."
        } else {
            return str
        }
    }

  return (
    <div>
      <h1>Blog Page</h1>
      <p>React Router is a fully-featured client and server-side routing library for 
        React, a JavaScript library for building user interfaces.
      </p> 
    <section>
        {blogs.map((blog)=>{
            const {id, title, desc} = blog
            return (<article key={id}>
                <h2>{title}</h2>
                {/* <p>{desc}</p> */}
                <p>{truncateString(desc, 40)}</p>
                <Link to={title} state={{id, title, desc}}>Learn More</Link>
            </article>
          )}
       )}
    </section>
    </div>
  )
}

export default Blogs
