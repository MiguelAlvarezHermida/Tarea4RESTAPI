import React from 'react'

const User = ({user,delUser}) => {
  return (
    <tr>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td><button onClick={()=>delUser(user._id)}>X</button></td>
    </tr>
  )
}

export default User