import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import useCart from '../context/hooks/useCart'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'

const ProductDetails = () => {
  const [product,setProduct]=useState({})
  const [loading,setLoading]=useState(false)
  const {addToCart} =useCart()
  
  const {id}=useParams()
    useEffect(()=>{
    const fetchProduct =async () => {
      setLoading(true)
        try {
            const res = await axiosInstance.get(`/api/products/${id}`)      
               
            setProduct(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
             setLoading(false)    
            throw new Error("Error fetching product", error); 
                  
        }
    };
    fetchProduct()
   },[id])
   
  return (
    <>
    <Navbar/>
       {loading ? (
        <>
          <Loader />
        </>
      ) : (<div className='pt-24 px-6 '>
      <Link className='px-4 py-2 rounded-md bg-slate-600 text-slate-50' to={'/'}> Back to Home</Link>
      <div className='my-4 flex flex-col sm:flex-row gap-8 w-full'>
     <div className='flex-1 overflow-hidden rounded-md'> <img src={product.image} alt='image' className='h-48 sm:h-96  w-full object-cover '/></div>
      <div className='p-6 border bg-slate-100 flex-1 rounded-md'>
        <h1 className='font-bold text-3xl sm:text-4xl capitalize '>{product.name}</h1>
        <p className='text-slate-500 text-3xl py-4 capitalize'>{product.category}</p>

        <p className='font-bold capitalize '><span className='font-thin text-slate-500 line-through pr-6 text-sm'>  ${product.oldPrice} </span> 
         ${product.newPrice}  </p>
                <p className='text-slate-500 pt-3 leading-6 text-sm'><span className='text-slate-800'>Description: <br/></span> {product.description} </p>
        <div className='flex  items-center mt-14 gap-6'>
          <button className='px-3 sm:px-5 py-3 rounded-md bg-slate-300 text-slate-800 hover:bg-slate-400 flex-1' onClick={()=>addToCart(product)}>Add To Cart</button>
          <button className='px-3 sm:px-5 py-3 rounded-md my-4 bg-blue-600 text-slate-100 hover:bg-blue-700 flex-1'>Buy Now</button>
        </div>
      </div>
      </div>
    </div>)}
    </>
  )
}

export default ProductDetails