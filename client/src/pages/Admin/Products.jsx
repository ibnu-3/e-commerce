import React from 'react'
import DashboardLayout from '../../components/admin/DashboardLayout'
import useProduct from '../../context/useProduct'
import { MdDelete, MdEdit } from 'react-icons/md'

const Products = () => {
    const {products}=useProduct()
  return (
    <DashboardLayout activeMenu={'Products'}>
    <div className=''>
       <table className='overflow-x-auto w-full'>
        <thead>
            <tr className='flex items-center justify-between border'>
                <th className='px-4 py-2 border-l '>Name</th>
                <th className='px-4 py-2 border-l '>Category</th>
                <th className='px-4 py-2 border-l '>Price</th>
                <th className='px-4 py-2 border-l '>In Stock</th>
                <th className='px-4 py-2 border-l '>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map((item)=>(
                <tr className='flex items-center justify-between capitalize border-b odd:bg-slate-100' key={item._id}>
                <td className='px-4 py-2 '>{item.name}</td>
                <td className='px-4 py-2 '>{item.category}</td>
                <td className='px-4 py-2 '>{item.newPrice.toFixed(2)}</td>
                <td className='px-4 py-2 '>{item.countInStock} </td>
                <td className='px-4 py-2 flex items-center gap-3'><MdEdit className='text-green-500'/> <MdDelete className='text-red-500' /></td>
            </tr>
            ))}
        </tbody>
       </table>
    </div>
    </DashboardLayout>
  )
}

export default Products