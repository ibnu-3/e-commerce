import React from 'react'
import {Link} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className='flex gap-4 '>
      <Link className='px-3 py-1 rounded-md bg-green-500 text-slate-50' to={'/admin/add'}>Add</Link>
      <Link className='px-3 py-1 rounded-md bg-blue-500 text-slate-50' to={'/admin/edit'}>edit</Link>
    </div>
  )
}

export default Dashboard