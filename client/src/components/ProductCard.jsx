import React from "react";
import productImage from "/hero0.jpg";
import useCart from "../context/hooks/useCart";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { addToCart, removeItemFromCart } = useCart();
  return (
    <div className="bg-white border rounded-lg  overflow-hidden mx-6">
      <Link to={`/details/${product._id}`}>
        <img
          src={product.image || productImage}
          alt="image"
          className="h-48 object-cover w-full  "
        />
      </Link>
      <div className="flex flex-col p-3 capitalize">
        <Link to={`/details/${product._id}`}>
          <p className="text-slate-500 ">{product.category}</p>
          <p className="font-bold text-xl">{product.name}</p>

          <div className="flex items-center gap-3">
            <p className="text-slate-400 line-through ">${product.oldPrice}</p>
            <p className="text-blue-500 font-bold">${product.newPrice}</p>
          </div>
        </Link>
        <button
          className="px-4 py-2 rounded-md text-slate-50 bg-slate-600 hover:bg-slate-700 border border-slate-500 mt-4 "
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
