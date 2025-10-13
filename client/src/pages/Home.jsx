import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useAuth from '../context/useAuth'
import Hero from '../components/Hero'
import useProduct from '../context/useProduct'
import ProductCard from '../components/ProductCard'
const Home = () => {
  const {user}=useAuth()
  const {products}=useProduct()
 
  return (
   <>
   <Navbar/>
   
    <div className="pt-20">
      {/* <Hero/> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-14'>
{products.map((product)=>(
  <div key={product._id} className=' '>
    <ProductCard product={product}/>
  </div>
))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home