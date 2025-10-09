import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import ProductDetails from './pages/ProductDetails'
import ProductList from './pages/ProductList'
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home/>} />
          <Route path='/:id' element={<ProductDetails/>} />
          <Route path='/products' element={<ProductList/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App