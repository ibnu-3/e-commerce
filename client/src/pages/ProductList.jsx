import React from 'react'

const ProductList = () => {
  return (
    <div>
      <><div className="flex flex-col gap-8 h-screen items-center justify-center ">

    <p className=" text-slate-500 text-center ">No products is found!</p>
    <Link to={'/'} className="px-4 py-2 rounded-md bg-slate-600 text-slate-50 w-[60%] text-center">Add Product Here</Link>
  </div></>
    </div>
  )
}

export default ProductList