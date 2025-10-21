import React from 'react'
import useAuth from '../../context/useAuth'
import { SIDEBAR_ITEMS } from '../../utils/data'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({activeMenu}) => {
  const {logout}=useAuth()
  const navigate=useNavigate()
  const handleRoute=(route)=>{
    if(route=== '/login'){
      handleLogout()
    }else{
      navigate(route)
    }
  }
  const handleLogout=async () => {
    await logout()
    navigate('/login')
  }
  return (
    <div className='w-48  shadow-md border-t-2 h-screen fixed top-24 bg-white'>
       <ul className='space-y-6'>
        {SIDEBAR_ITEMS.map((item)=>(
          <li key={item.id} className={activeMenu === item.label ? 'bg-blue-50 text-blue-800 border-r-4 border-blue-500 ':''}>
            <button onClick={()=>handleRoute(item.path)}
            className='flex items-center gap-3 px-4 py-2 rounded-md  w-full hover:bg-blue-50 '><item.icon size={30}/> {item.label}</button>
          </li>
        ))}
       </ul>
    </div>
  )
}

export default Sidebar