import React from 'react'
import useAuth from '../context/useAuth'
import {MdClose, MdSearch, MdShoppingCart} from 'react-icons/md'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
   const { user,logout } = useAuth()
   const navigate=useNavigate()
   const handleLogout =async()=>{
    await logout()
    navigate('/login')
   }
  
  return (
    <div className='fixed w-full flex items-center justify-between bg-slate-200 border-b shadow-md text-slate-500 p-4'>
      <h1>E-commerce</h1>
      <div className='flex items-center gap-3'>
        <div className="flex items-center gap-4">
          <Link to={'/'}>Home</Link>
          <Link to={'/products'}>All products</Link>
          <div className='flex items-center rounded-md bg-white'>
            <input type="text" placeholder='Search Products'className="outline-none px-3" />
            <MdSearch size={30}/>
          </div>
        </div>
        <div className='flex'>
          <MdShoppingCart size={30} className=''/>
          <span className='bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full -ml-4 -mt-3'>20</span>
        </div>
        {user ?(<div className='flex items-center gap-3'>
        <div className=''>
          {user?.profilePic ? (<img src={user?.profilePic} alt="profile pic" className='w-10 h-10 rounded-full object-cover'/>):(<div className='w-10 h-10 rounded-full bg-purple-600 text-slate-50 flex items-center justify-center'>{user.name[0].toUpperCase()}</div>)}
        </div>
        <div>
          <button onClick={handleLogout} className='bg-blue-500 text-slate-300 rounded-md px-2 py-1'>Logout</button></div>
        </div>):(<> <Link to={'/login'} className='bg-teal-700 text-slate-300 rounded-md px-2 py-1'>Login</Link></>)}
       
      </div>
    </div>
  )
}

export default Navbar