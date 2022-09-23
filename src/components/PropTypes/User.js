import React from 'react'
import PropTypes from 'prop-types'

const User = (props) => {
  const {name, ID} = props.userNamee
  return (
    <div>
      <h2>{props.userName}</h2>
      <h2>{props.userId}</h2>
      <h4>{name}</h4>
      <h4>{ID}</h4>
    </div>
  )
}

User.propTypes = {
  //key value (pair)
  //userName: PropTypes.string.isRequired,
  userName: PropTypes.string, //for string
  userId: PropTypes.number,
  //for the object PropTypes syntax
  userNamee: PropTypes.shape({
       name: PropTypes.string,
         ID: PropTypes.number})
}

//for default props the syntax is--
User.defaultProps ={
  userName: "Default Name",
  userId: 0,
}

export default User
