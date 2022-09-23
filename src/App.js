import React, { useEffect, useState } from "react";
//import React, { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./Pages/Home"
// import About from "./Pages/About";
// import Blogs from "./Pages/Blogs";
// import Blog from "./Pages/Blog";
// import Contact from "./Pages/Contact";
// import Error from "./Pages/Error";
// import User from "./Pages/User";

// import { Nav } from "react-bootstrap";
// import Navbar from "./components/Navbar";

import "./App.css"
import UserForm from "./components/UserForm";
//import Index from "./Routes/index";
//import AddBlog from "./Pages/AddBlog";

//import Users from "./components/PropTypes/Users";
// import Component1 from "./components/Props_Drilling/Component1";
//import UseReducer from "./Hooks_useReducer";
//import UserForm from "./HOOKS_useRefExample/UserForm";
//import UserForm from "./components/RefExample/UserForm";
//import LifeCycle from "./components/LifeCycle/LifeCycle";
// import React, { Fragment } from "react";
//import Table from "./components/Table/Table";
//<div>
          //    {/* <Table /> */}
          //    {/* <LifeCycle /> */}
          //    {/* <UserForm /> */}
          //    {/* <UseReducer /> */}
          //    {/* <Component1 /> */}
          //    {/* <Users /> */}
          // {/* </div> */}

          const URL= "https://rest-api-without-db.herokuapp.com/users/"

export default function App(){

     const [users, setUsers] = useState(null)
     const [isLodding, setIsLodding] = useState(true)
     const [error, setError] = useState(null)

     //update
     const [selectedUser, setSelectedUser] = useState({
          username:'',
          email:''
     })
     const [updateFlag, setUpdateFlag] = useState(false)
     const [selectedUserId, setSelectedUserId] = useState("")

     const getAllUsers = () => {
          fetch(URL)
          .then((res) => {
            if(!res.ok){
                 throw Error("Could not fetch")
            }
            return res.json()
          })
          .then((data) => {
          //   console.log(data.users)
            setUsers(data.users)
          })
          .catch((err) => {
            setError(err.message)
          })
          .finally(()=> {
            setIsLodding(false)
          })
     }

     useEffect( () => {
     //    fetch(URL)
     //    .then((res) => {
     //      if(!res.ok){
     //           throw Error("Could not fetch")
     //      }
     //      return res.json()
     //    })
     //    .then((data) => {
     //      console.log(data.users)
     //      setUsers(data)
     //    })
     //    .catch((err) => {
     //      setError(err.message)
     //    })
     //    .finally(()=> {
     //      setIsLodding(false)
     //    })
      getAllUsers();
     }, [])

     const handleDelete = (id)=> {
          fetch(URL + `/${id}`,{
              method: 'DELETE',
          })
          .then((res) => {
            if(!res.ok){
                 throw Error("Could not delete")
            }
            getAllUsers();
          })
          .catch((err) => {
            setError(err.message)
          })
     }
     
     const addUser = (user) =>{
          // console.log(user);
          fetch(URL, {
               method: 'POST',
               headers: {
                    "Content-Type" : "application/json"
               },
               body: JSON.stringify(user)
           })
           .then((res) => {
             if(res.status === 201){
                  getAllUsers()
             } else {
               throw new Error("Could not create new User")
             }
           })
           .catch((err) => {
             setError(err.message)
           })
     }

    const handleEdit = (id) => {
     //    alert(id)
     setSelectedUserId(id)
     setUpdateFlag(true);
     const filteredData = users.filter((user) => user.id === id)
     // console.log(filteredData)
     setSelectedUser({
          username: filteredData[0].username,
          email: filteredData[0].email,
     })
    }
    const handleUpdate = (user)=> {
     // console.log(user);
     fetch(URL + `/${selectedUserId}`, {
          method: 'PUT',
          headers: {
               "Content-Type" : "application/json"
          },
          body: JSON.stringify(user)
      })
      .then((res) => {
        if(!res.ok){
          throw new Error ("Failed to update !!!")
        }
        getAllUsers()
        setUpdateFlag(false)
      })
      .catch((err) => {
        setError(err.message)
      })
    }

     return(
          // <BrowserRouter>
          // <Nav>
          //       <ul>
          //            {/* <a href="/home">Home</a><br/> */}
          //           <a href="/home">Home</a><br/>
          //           <a href="/about">About</a><br/>
          //           <a href="/contact">contact</a><br/>
          //      </ul>
          //  </Nav>

          // <Navbar/>

          //     <Routes>
          //       <Route path="/home" element = {<Home />}/>
          //       <Route path="/about" element = {<About />}/>
          //       <Route path="/contact" element = {<Contact />}/>
          //       <Route path="/blog" element = {<Blogs />}/>
          //       <Route path="/blog/:title" element = {<Blog />}/>
          //       <Route path="*" element = {<Error />}/>
          //       <Route path="/user" element = {<User />}/>
          //          {/* <Route path="/user/:userId" element = {<User />}/> */}
          //       <Route path="/addBlog" element = {<AddBlog/>}/>
          //     </Routes>
          // </BrowserRouter>
          <div className="App">
               <h1>User Management App</h1>
               {isLodding && <h2>Loading...</h2>}
               {error && <h2>{error}</h2>}
     
               {updateFlag ? (<UserForm btnText="Update User" selectedUser = {selectedUser} 
                              handleSubmitData = {handleUpdate}/>):
                             (<UserForm btnText="Add User" handleSubmitData = {addUser}/>)}

               <section>
               {users && users.map((user) => {
                    const {id, username, email} = user;
                    return(
                         <article key={id} className = "card">
                           <p>{username}</p>
                           <p>{email}</p>
                           <button className="bttn" onClick={()=>{handleEdit(id)}}>Edit</button>
                           <button className="bttn" onClick={()=>{handleDelete(id)}}>Delete</button>
                         </article>
                    );
               })}
               </section>

          </div>
     )
}
