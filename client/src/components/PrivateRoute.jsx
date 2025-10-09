import React from 'react'
import useAuth from '../context/useAuth'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {user} =useAuth()
  return user ? children : <Navigate to={'/login'} />
}

export default PrivateRoute