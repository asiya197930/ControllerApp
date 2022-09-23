//import React from 'react';
import { useState } from "react";
import React, {BrowserRouter, Routes, Route} from "react-router-dom";

// import Home from "./Protected_Routing/Home"
// import About from "./Protected_Routing/About";
// import AddBlog from "./Protected_Routing/AddBlog";
// import Error from "./Protected_Routing/Error";
import Home from "../Pages_Protected_Routing/Home"
import About from "../Pages_Protected_Routing/About"
import AddBlog from "../Pages_Protected_Routing/AddBlog"
import Error from "../Pages_Protected_Routing/Error"

import Navbar from "../components/Navbar"
import Protected from "./Protected";


const Index = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
    <Navbar/>
    {isLoggedIn ? <button onClick={()=> {setIsLoggedIn(!isLoggedIn)}}>Log Out{" "}</button> : 
    <button onClick={()=> {setIsLoggedIn(!isLoggedIn)}}>Log In</button>}
    <Routes>
                <Route path="/home" element = {<Home />}/>
                <Route path="/about" element = {<About />}/>
                <Route path="/addBlog" element = {<Protected isLoggedIn={isLoggedIn}>
                  <AddBlog/>
                </Protected>}/>
                <Route path="/*" element = {<Error />}/>
              </Routes>
    </BrowserRouter>
  )
}

export default Index

