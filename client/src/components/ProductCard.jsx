import React from "react";
import productImage from "/hero0.jpg";
import useCart from "../context/hooks/useCart";
const ProductCard = ({product}) => {
  const {addToCart,removeItemFromCart}=useCart()
  return (
    <div className="bg-white border rounded-lg  overflow-hidden  mx-6">
      <img
        src={product.image || productImage}
        alt="image"
        className="h-48 object-cover w-full hover:scale-105 duration-300 "
      />
      <div className="flex flex-col p-3">
        <p className="text-slate-500 ">{product.category}</p>
        <h1 className="font-bold text-xl">{product.name}</h1>

      
          <div className="flex items-center gap-3">
            <p className="text-slate-400 line-through ">${product.oldPrice}</p>
            <p className="text-blue-500 font-bold">${product.newPrice}</p>
          </div>
          <button className="px-4 py-2 rounded-md text-slate-50 bg-slate-600 hover:bg-slate-700 border border-slate-500 my-4 " onClick={()=>addToCart(product)}>Add</button>
    
      </div>
    </div>
  );
};

export default ProductCard;
