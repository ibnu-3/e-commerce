import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../context/useAuth";
import Hero from "../components/Hero";
import useProduct from "../context/useProduct";
import ProductCard from "../components/ProductCard";
const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { user } = useAuth();
  const { products, searchTerm } = useProduct();
  useEffect(() => {
    if (searchTerm !== "") {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchTerm]);
  return (
    <>
      <Navbar />

      <div className="pt-20">
        {/* <Hero/> */}
        {filteredProducts.length === 0 ? (
          <div className="text-slate-500 p-14 flex items-center justify-center ">Oops! no product is found</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-14">
            {filteredProducts.map((product) => (
              <div key={product._id} className=" ">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
