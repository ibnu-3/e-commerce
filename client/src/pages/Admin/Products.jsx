import React from 'react'
import DashboardLayout from '../../components/admin/DashboardLayout'
import useProduct from '../../context/useProduct'
import { MdDelete, MdEdit } from 'react-icons/md'
import Loader from '../../components/Loader'
import { Link } from 'react-router-dom'

const Products = () => {
    const {products, loading, deleteProduct}=useProduct()
  return (
    <DashboardLayout activeMenu={'Products'}>
   {loading ?(<><Loader/></>):(products.length >0 ?( <div className=''>
       <table className='overflow-x-auto w-full'>
        <thead>
            <tr className='flex items-center justify-between border'>
                <th className='px-4 py-2 border-l '>Name</th>
                <th className='px-4 py-2 border-l hidden md:flex'>Category</th>
                <th className='px-4 py-2 border-l '>Price</th>
                <th className='px-4 py-2 border-l hidden md:flex'>In Stock</th>
                <th className='px-4 py-2 border-l '>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map((item)=>(
                <tr className='flex items-center capitalize border-b odd:bg-slate-100' key={item._id}>
                <td className='px-4 py-2 flex-1'>{item.name}</td>
                <td className='px-4 py-2 hidden md:flex flex-1 '>{item.category}</td>
                <td className='px-4 py-2 flex-1'>{item.newPrice.toFixed(2)}</td>
                <td className='px-4 py-2 hidden md:flex flex-1'>{item.countInStock} </td>
                <td className='px-4 py-2 flex items-center gap-3'><MdEdit className='text-blue-500'/> <MdDelete className='text-red-500 cursor-pointer' onClick={()=>deleteProduct(item._id)} /></td>
            </tr>
            ))}
        </tbody>
       </table>
    </div>):( <><div className="flex flex-col gap-8 h-screen items-center justify-center ">

    <p className=" text-slate-500 text-center ">No products is found!</p>
    <Link to={'/'} className="px-4 py-2 rounded-md bg-slate-600 text-slate-50 w-[60%] text-center">Add Product Here</Link>
  </div></>))}
    </DashboardLayout>
  )
}

export default Products