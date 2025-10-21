import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const DashboardLayout = ({children, activeMenu}) => {
  return (
    <>
    <Header />
      <div className='flex gap-4 bg-slate-100'>
      <div className='bg-white hidden sm:flex '>
        <Sidebar activeMenu={activeMenu}/>
      </div>
      <div className='sm:ml-48 mt-24 bg-white p-3 flex-1 min-h-screen rounded-md'>
        {children}
      </div>
    </div>
    </>
  )
}

export default DashboardLayout