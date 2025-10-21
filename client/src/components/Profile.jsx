import React from 'react'
import {Link} from 'react-router-dom'
import useAuth from '../context/useAuth'
const Profile = ({open}) => {
    const {user}=useAuth()
  return open ?(
    <div className='  z-50 bg-white p-2 fixed top-15 right-5 border border-slate-200 rounded-xl shadow-md'>
        <div className='flex flex-col  w-36 '>
            {user?.isAdmin && <Link to={'/admin/products'} className=' hover:bg-slate-200 px-3 py-1.5 rounded-md'>Admin</Link>}
           {user && <> <Link to={'/order'} className="hover:bg-slate-200 px-3 py-1.5 rounded-md">My orders</Link>
           <Link to={'/profile'} className="hover:bg-slate-200 px-3 py-1.5 rounded-md">My Profile</Link>
            <button className='px-3 py-1.5 rounded-md bg-blue-500 hover:bg-blue-600 text-slate-300 mt-2'>Logout</button></>}
        </div>
    </div>
  ):(<></>)
}

export default Profile