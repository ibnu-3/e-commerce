import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { ProductContext } from "./useProduct";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productChange, setProductChange] = useState(false);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleProductChange = () => {
    setProductChange(!productChange);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/api/products");

        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [productChange]);
  const deleteProduct = async (id) => {
    try {
      if (window.confirm("Are you sure you wanted to delete this ?")) {
        await axiosInstance.delete(`/api/products/${id}`);
        setProducts(products.filter((product) => product._id !== id));
        handleProductChange();
      }
    } catch (error) {
      console.log(error.message);
      throw new Error("Error deleting ", error);
    }
  };
  const value = {
    products,
    loading,
    searchTerm,
    setSearchTerm,
    handleProductChange,
    deleteProduct,
  };
  return (
    <ProductContext.Provider value={value}>
      {!loading && children}
    </ProductContext.Provider>
  );
};
