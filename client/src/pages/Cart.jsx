import React from "react";
import useCart from "../context/hooks/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useCart();
  console.log(cartItems);
  return (
    <div className="pt-24">
      <h1 className="my-4 text-2xl text-center">Your cart</h1>
      <ul className="space-y-6 p-4">
        {cartItems.map((item) => (
          <li
            key={item._id}
            className="flex items-center justify-between border-b rounded-md "
          >
            <div className="flex gap-2 items-center">
              <img
                src={item?.image}
                alt="image"
                className="h-14 w-14 rounded-lg"
              />
              <div className="flex flex-col">
                <p className="font-bold capitalize">{item.name}</p>
                <div className="">
                  <span className="text-slate-500">qty:</span>
                <select className="outline-none">
                  {Array(item.countInStock)
                    .fill("")
                    .map((_, index) => (
                      <option key={index} value={index + 1}>
                        {item.quantity}
                      </option>
                    ))}
                </select>
                </div>
              </div>
            </div>
            <p>${item.newPrice * item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
