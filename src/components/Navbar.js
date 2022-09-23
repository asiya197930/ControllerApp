import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/* <Link to = "/" className='nav-link'>Home</Link>
        <Link to = "/about" className='nav-link'>About</Link>
        <Link to = "/Contact" className='nav-link'>Contact</Link> */}
        <NavLink to = "/home" className="nav-link">Home</NavLink>
        <NavLink to = "/about" className="nav-link">About</NavLink>
        <NavLink to = "/contact" className="nav-link">Contact</NavLink>
        <NavLink to = "/blog" className="nav-link">Blogs</NavLink>
        <NavLink to = "/addblog" className="nav-link">AddBlog</NavLink>
    </nav>
  )
}

export default Navbar
