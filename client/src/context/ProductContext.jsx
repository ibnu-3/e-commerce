import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { ProductContext } from "./useProduct";

export const ProductProvider =({children})=>{
    const [products, setProducts]=useState([])
    const [productChange, setProductChange]=useState(false)
   
     const [searchTerm, setSearchTerm] = useState("");

     const handleProductChange=()=>{
        setProductChange(!productChange)
     }
   useEffect(()=>{
    const fetchProducts =async () => {
        try {
            const res = await axiosInstance.get('/api/products')
          
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    };
    fetchProducts()
   },[productChange])
 
    const value={products, searchTerm, setSearchTerm, handleProductChange}
    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

