import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { ProductContext } from "./useProduct";


export const ProductProvider =({children})=>{
    const [products, setProducts]=useState([])
    const [product, setProduct]=useState({})
   useEffect(()=>{
    const fetchProducts =async () => {
        try {
            const res = await axiosInstance.get('/api/products')
            console.log(res.data)
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    };
    fetchProducts()
   },[])
    const value={products}
    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

