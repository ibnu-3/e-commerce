import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const DashboardLayout = ({children, activeMenu}) => {
  return (
    <>
    <Header />
      <div className='flex '>
      <Sidebar activeMenu={activeMenu}/>
      <div>
        {children}
      </div>
    </div>
    </>
  )
}

export default DashboardLayout