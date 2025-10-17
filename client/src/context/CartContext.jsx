import { useEffect, useState } from "react";
import { CartContext } from "./hooks/useCart";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
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
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item._id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
   const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); // Clear localStorage when cart is cleared
  };

  console.log(cartItems)
const value={cartItems,addToCart,removeItemFromCart, clearCart}
  return <CartContext.Provider value={value}>
    {children}</CartContext.Provider>;
};
