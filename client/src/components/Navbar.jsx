import React from 'react'
import useAuth from '../context/useAuth'

const Navbar = () => {
  const {user}=useAuth()
  return (
    <div className='fixed w-full flex items-center justify-between bg-slate-200 border-b shadow-md text-slate-500 p-4'>
      <h1>E-commerce</h1>
      <div>
        {!user && <div>
          <button className='bg-blue-500'>Logout</button></div>}
      </div>
    </div>
  )
}

export default Navbar