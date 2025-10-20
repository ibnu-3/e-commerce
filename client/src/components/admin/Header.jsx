import React from 'react'
import useAuth from '../../context/useAuth'
import {Link, useNavigate} from 'react-router-dom'
const Header = () => {
    const {user,logout}=useAuth()
    const navigate=useNavigate()
    const handleLogout=async()=>{
      await logout()
      navigate('/login')
    }
  return (
    <div className='fixed flex justify-between items-center z-50 w-full shadow-lg border-b p-4'>
        <Link to={'/'}>E-commerce</Link>
        <div className='flex items-center gap-6  '>
            <p className='capitalize '>{user?.name}</p>
            {user.profilePic ? (<>
            <img src={user?.profilePic} className='h-10 w-10 rounded-full'/></>):(<div className='flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-slate-300 '>{user?.name[0]}</div>)}
            <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Header