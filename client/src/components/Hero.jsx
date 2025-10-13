import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className='relative '>
      <img src="/hero0.jpg" alt="hero" className='h-96 w-full object-cover '/>
      <div className='flex gap-5 left-40 rounded-md absolute top-36 p-4'>
        <Link  to={'/products'} className='px-4 py-2 bg-sky-600 text-slate-300 rounded-md '>Shope Now</Link>
        <Link  to={'/products'} className='px-4 py-2 bg-sky-600 text-slate-300 rounded-md '>Explore More</Link>
      </div>
    </div>
  )
}

export default Hero