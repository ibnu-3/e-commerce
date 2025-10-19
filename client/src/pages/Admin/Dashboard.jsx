import React from 'react'
import {Link} from 'react-router-dom'
import DashboardLayout from '../../components/admin/DashboardLayout'
const Dashboard = () => {
  return (
    <DashboardLayout activeMenu={'Dashboard'}>
      <Link className='px-3 py-1 rounded-md bg-green-500 text-slate-50' to={'/admin/add'}>Add</Link>
      <Link className='px-3 py-1 rounded-md bg-blue-500 text-slate-50' to={'/admin/edit'}>edit</Link>
    </DashboardLayout>
  )
}

export default Dashboard