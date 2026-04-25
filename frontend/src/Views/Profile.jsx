import React from 'react'
import { Box, Container, Typography, Avatar, Paper } from '@mui/material'



const Profile = ({user}) => {
  return (

    <>

      <div>Profile</div>
      <h1> Nombre: {user.name} </h1>
      <h2> id: {user._id} </h2>

    </>

  )


}
export default Profile

