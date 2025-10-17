import React from 'react'
import useAuth from '../context/useAuth'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {user} =useAuth()
  return user?.isAdmin ? children : <Navigate to={'/'} />
}

export default PrivateRoute