import { useState, useEffect } from 'react'
import HomePage from "./pages/HomePage"
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import './App.css'
import { useLocation } from 'react-router-dom'
import { HashRouter as Router, BrowserRouter, Route, Routes } from 'react-router-dom'


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

    </Routes>
    </Router>
  )
}

export default App
