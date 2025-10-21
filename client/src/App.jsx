import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetails from "./pages/ProductDetails";

import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Dashboard from "./pages/Admin/Dashboard";
import AddProduct from "./pages/Admin/AddProduct";

import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/details/:id" element={<ProductDetails />} />

              <Route
                path="/admin/add"
                element={
                  <PrivateRoute>
                    <AddProduct />{" "}
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/products"
                element={
                  <PrivateRoute>
                    <Dashboard />{" "}
                  </PrivateRoute>
                }
              />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
