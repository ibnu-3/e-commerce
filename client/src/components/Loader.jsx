import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center pt-36 pl-16'>
        <div className='h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600 '></div>
    </div>
  )
}

export default Loader