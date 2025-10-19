import React from "react";
import useCart from "../context/hooks/useCart";
import { Link } from "react-router-dom";
import { MdArrowLeft, MdDelete } from "react-icons/md";
import Navbar from "../components/Navbar";

const Cart = () => {
  const { cartItems,addToCart,clearCart,removeFromCart,updateCart,totalPrice } = useCart();
  console.log(cartItems);
  return cartItems.length === 0 ?(
  <>  <Navbar />
  <div className="flex flex-col gap-8 h-screen items-center justify-center ">

    <p className=" text-slate-500 text-center ">No items are added</p>
    <Link to={'/'} className="px-4 py-2 rounded-md bg-slate-600 text-slate-50 w-[60%] text-center">Go to Shopping</Link>
  </div></>):(
    <div className="">
    <Navbar />
      <h1 className="pt-24 text-2xl text-center font-bold underline capitalize">Your cart</h1>
      <div className="flex items-center justify-between border-b rounded-md p-4 font-bold ">
        <h2 className=" ">Product Name</h2>
        <p className="">Price</p>
        <p>Action</p>
      </div>
      <ul className="space-y-2 p-4">
        {cartItems.map((item) => (
          <li
            key={item._id}
            className="flex items-center justify-between rounded-md py-3"
          >
            <div className="flex gap-2 items-center">
              <img
                src={item.image || '/hero.jpg'}
                alt="image"
                className="h-14 w-14 rounded-lg"
              />
              <div className="flex flex-col">
                <p className="font-bold capitalize">{item.name}</p>
                <div className="">
                 <button className="px-3 py-1.5 bg-slate-200 rounded-md" onClick={()=>updateCart(item._id)}>-</button>
                  <span className="text-slate-500 mx-2">{item.quantity}</span>
                   <button className="px-3 py-1.5 bg-slate-200 rounded-md" onClick={()=>addToCart(item)}>+</button>
          
                </div>
              </div>
            </div>
            <p>${item.newPrice * item.quantity}</p>
            <MdDelete className="text-red-600 cursor-pointer" onClick={()=>removeFromCart(item._id)}/>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 px-6">
        <p className="font-bold text-right underline">Total Price: ${totalPrice.toFixed(2)}</p>
        <p className="w-28 px-3 py-2 bg-red-600 hover:bg-red-800 text-slate-100  rounded-md text-center cursor-pointer" onClick={clearCart}>Clear Cart</p>
        
       <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mt-14 ">
         <Link to={'/'} className="border bg-blue-100  rounded-md px-4 py-2 text-blue-600  text-xl w-full flex items-center justify-center"><MdArrowLeft size={30}/> Continue Shopping</Link>
         <Link to={'/checkout'} className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-gray-50  text-center w-full">Go to Checkout</Link>
       </div>
      </div>
    </div>
  );
};

export default Cart;
