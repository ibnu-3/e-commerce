import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Dashboard from './pages/Admin/Dashboard'
import AddProduct from './pages/Admin/AddProduct'
import EditProduct from './pages/Admin/EditProduct'
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<ProductDetails />} />
              <Route path="/admin" element={<PrivateRoute><Dashboard/> </PrivateRoute>} />
              <Route path="/admin/add" element={<PrivateRoute><AddProduct/> </PrivateRoute>} />
              <Route path="/admin/edit" element={<PrivateRoute><EditProduct/> </PrivateRoute>} />
            </Routes>
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
