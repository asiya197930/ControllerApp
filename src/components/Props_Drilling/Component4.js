import React, {useContext} from 'react'
import { UserContext } from './UserContext'

//const Component4 = ({user}) => {
const Component4 = () => {
    //const user = useContext(UserContext);
    const {user, text} = useContext(UserContext);
    // console.log(user)
  return (
    <div>
      <h2>Text: {text} </h2>
      <h2>User Id: {user.id}</h2>
      <h2>User Name: {user.name}</h2>
    </div>
  )
}

export default Component4
