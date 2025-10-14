import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import useProduct from "../context/useProduct";
import axiosInstance from "../utils/axiosInstance";

const Search = () => {
 
  
  const { products,searchTerm,setSearchTerm } = useProduct();

  return (
    <div className="flex items-center rounded-md bg-white">
      <input
        type="text"
        placeholder="Search Products"
        className="outline-none px-3"
        value={searchTerm}
     onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <MdSearch size={30} />
    </div>
  );
};

export default Search;
