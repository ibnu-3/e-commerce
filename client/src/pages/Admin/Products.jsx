import React from 'react'
import DashboardLayout from '../../components/admin/DashboardLayout'
import useProduct from '../../context/useProduct'
import { MdDelete, MdEdit } from 'react-icons/md'

const Products = () => {
    const {products}=useProduct()
  return (
    <DashboardLayout activeMenu={'Products'}>
    <div className=''>
       <table className='overflow-x-auto'>
        <thead>
            <tr className='flex items-center justify-between'>
                <th className='px-4 py-2 border-b '>Name</th>
                <th className='px-4 py-2 border-b '>Category</th>
                <th className='px-4 py-2 border-b '>Price</th>
                <th className='px-4 py-2 border-b '>In Stock</th>
                <th className='px-4 py-2 border-b '>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map((item)=>(
                <tr className='flex items-center justify-between capitalize' key={item._id}>
                <td className='px-4 py-2 border-b '>{item.name}</td>
                <td className='px-4 py-2 border-b '>{item.category}</td>
                <td className='px-4 py-2 border-b '>{item.newPrice.toFixed(2)}</td>
                <td className='px-4 py-2 border-b '>{item.inStock} </td>
                <td className='px-4 py-2 border-b flex items-center gap-3'><MdEdit className='text-green-500'/> <MdDelete className='text-red-500' /></td>
            </tr>
            ))}
        </tbody>
       </table>
    </div>
    </DashboardLayout>
  )
}

export default Products