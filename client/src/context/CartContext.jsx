import { useEffect, useState } from "react";
import { CartContext } from "./hooks/useCart";


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localCart = localStorage.getItem('cartItems');
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.log(error.message);
      throw new Error("failed to set cart items", error);
    }
  }, [cartItems]);
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItemIndex >= 0) {
        return prevItems.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  }
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
  };
  const updateCart =(id)=>{
    setCartItems((prevItems)=>{
      const existingItemIndex = prevItems.findIndex(cartItem=> cartItem._id=== id);
      if(existingItemIndex >=0){
        return prevItems.map((item,index)=> index=== existingItemIndex ? {...item, quantity:item.quantity - 1}: item)
      }
      return prevItems;
    })
  }
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); // Clear localStorage when cart is cleared
  };
const totalPrice = cartItems.reduce((acc,item)=>acc + item.newPrice * item.quantity, 0)
  console.log(cartItems);
  const value = { cartItems,addToCart, updateCart,removeFromCart, clearCart, totalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
