import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../Sections/Footer';
import CartMainSection from '../Sections/CartMainSection';

function CartPage() {

  return (
    <div className="bg-darkest  p-5 h-full">
      <Navbar/>
      <CartMainSection/>
  <Footer/>
    </div>
  );
}

export default CartPage;