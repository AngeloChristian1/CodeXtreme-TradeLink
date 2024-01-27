import { useState, useEffect } from 'react'
import HomePage from "./pages/HomePage"
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ErrorPage from './pages/ErrorPage'
import RegisterCompany from './pages/RegisterCompany'
import './App.css'
import { Navigate, useLocation } from 'react-router-dom'
import { HashRouter , BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'
import User from './pages/User'
import OrdersPage from './pages/OrdersPage'
import DashBoard from './pages/DashBoard'
import SingleOrder from './pages/SingleOrder'
import SingleProductPage from './pages/SingleProductPage'
import HomeProductPage from './pages/HomeProductsPage'

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {

  return (
    <Router base="/the-Artemis-Website-V2/">
    <ScrollToTopOnPageChange />
    <Routes  >
    
    <Route index  path="/" element={<HomePage />}/>
    <Route  path="/signin" element={<LoginPage />}/>
    <Route  path="/signup" element={<SignUpPage />}/>
    <Route  path="/products" element={<HomeProductPage />}/>
    <Route  path="/profile" element={<ProfilePage/>}/>
    <Route  path="/register-company" element={<RegisterCompany />}/>
    <Route path='/user' element={<User/>}> 
          <Route path='' element={<DashBoard/>}/>     
          <Route path='profile' element={<ProfilePage/>}/>
          <Route path='products' element={<ProductPage/>}/>
          <Route path='products/:id' element={<SingleProductPage/>}/>
          <Route path='orders' element={<OrdersPage/>}/>
          <Route path='orders/:id' element={<SingleOrder/>}/>
          <Route  element={<Navigate replace to='' />}/>
    </Route>

{/*    <Route path='/companies' element={<Companies />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/companies/:companyId' element={<Company />} />
    <Route path='/user' element={<User />}>
      <Route index element={<Navigate replace to='products' />} />
      <Route path='products' element={<Product />} />
  </Route>*/}
    <Route exact path="/*" element={<ErrorPage/>}/>

    </Routes>
    </Router>
  )
}

export default App
