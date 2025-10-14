import { createContext, useContext } from "react";

export const CartContext =createContext(null)
const useCart =()=>{
   return useContext(CartContext)
}
export default useCart