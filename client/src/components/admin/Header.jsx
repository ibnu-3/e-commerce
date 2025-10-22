import React from 'react'
import useAuth from '../../context/hooks/useAuth'
import {Link, useNavigate} from 'react-router-dom'
import { MdClose, MdMenu } from 'react-icons/md'
import { useState } from 'react'
import { SIDEBAR_ITEMS } from '../../utils/data'
const Header = ({activeMenu}) => {
  const [open, setOpen]=useState(false)
    const {user,logout}=useAuth()
    const navigate=useNavigate()
     const handleRoute=(route)=>{
    if(route=== '/login'){
      handleLogout()
    }else{
      navigate(route)
    }
  }
    const handleLogout=async()=>{
      await logout()
      navigate('/login')
    }
  return (
    <div className=''>
    <div className='fixed flex justify-between items-center z-50 bg-white w-full shadow-lg border-b p-4'>
        
        <div className='flex items-center gap-2'>{open ? <MdClose size={25} className='sm:hidden' onClick={()=>setOpen(!open)}/>: <MdMenu size={25} className='sm:hidden' onClick={()=>setOpen(!open)} />}
        
        <h1>
         <Link to={'/'} className=' text-xl '>E-commerce</Link> 
        </h1>
          
        </div>
        <div className='flex items-center gap-6  '>
            <p className='capitalize '>{user?.name}</p>
            {user.profilePic ? (<>
            <img src={user?.profilePic} className='h-10 w-10 rounded-full'/></>):(<div className='flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-slate-300 '>{user?.name[0]}</div>)}
            <button className='hidden sm:block' onClick={handleLogout}>Logout</button>
        </div>
    </div>
    {open && <div className='w-48 fixed left-0 top-24 h-screen bg-white shadow-2xl '>
      <ul className='space-y-6'>
            {SIDEBAR_ITEMS.map((item)=>(
              <li key={item.id} className={activeMenu === item.label ? 'bg-blue-50 text-blue-800 border-r-4 border-blue-500 ':''}>
                <button onClick={()=>handleRoute(item.path)}
                className='flex items-center gap-3 px-4 py-2 rounded-md  w-full hover:bg-blue-50 '><item.icon size={30}/> {item.label}</button>
              </li>
            ))}
           </ul>
    </div>}</div>
  )
}

export default Header