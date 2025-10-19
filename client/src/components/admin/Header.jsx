import React from 'react'
import useAuth from '../../context/useAuth'
import {useNavigate} from 'react-router-dom'
const Header = () => {
    const {user,logout}=useAuth()
    const navigate=useNavigate()
    const handleLogout=async()=>{
      await logout()
      navigate('/login')
    }
  return (
    <div>
        <h1>E-commerce</h1>
        <div>
            <p className='capitalize font-bold text-xl'>Hi! {user?.name}</p>
            {user.profilePic ? (<>
            <img src={user?.profilePic} className='h-10 w-10 rounded-full'/></>):(<div className='flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-slate-300 '>{user?.name[0]}</div>)}
            <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Header