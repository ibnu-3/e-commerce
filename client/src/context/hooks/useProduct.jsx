import { createContext, useContext } from "react";

export const ProductContext=createContext(null)
 const useProduct=()=>{
    return useContext(ProductContext)
}
export default useProduct