import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useAuth from '../context/useAuth'
import Hero from '../components/Hero'
const Home = () => {
  const {user}=useAuth()
 
  return (
   <>
   <Navbar/>
   
    <div className="pt-20">
      <Hero/>
      
    </div>
    <Footer/>
    </>
  )
}

export default Home