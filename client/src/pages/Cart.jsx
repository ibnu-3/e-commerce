import React from "react";
import useCart from "../context/hooks/useCart";
import { Link } from "react-router-dom";
import { MdArrowLeft, MdDelete } from "react-icons/md";
import Navbar from "../components/Navbar";

const Cart = () => {
  const { cartItems,addToCart,removeFromCart,updateCart,totalPrice } = useCart();
  console.log(cartItems);
  return cartItems.length === 0 ?(<div className="flex flex-col gap-6 items-center justify-center">
  <Navbar />
    <p className=" text-slate-500 text-center">No items are added</p>
    <Link to={'/'} className="px-4 py-2 rounded-md bg-slate-600 text-slate-50">Go to Shopping</Link>
  </div>):(
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
                src={item.image}
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
       <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mt-14 ">
         <Link to={'/'} className="border bg-blue-100  rounded-md px-4 py-2 text-blue-600 font-bold text-xl w-full flex items-center justify-center"><MdArrowLeft size={30}/> Continue Shopping</Link>
         <Link to={'/checkout'} className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-gray-50  text-center w-full">Go to Checkout</Link>
       </div>
      </div>
    </div>
  );
};

export default Cart;
