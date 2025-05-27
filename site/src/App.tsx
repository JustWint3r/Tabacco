import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import PaymentSection from './components/PaymentSection';
import CustomerService from './components/CustomerService';
import Footer from './components/Footer';
import { CartProvider } from './lib/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Hero />
        <div className="container">
          <ProductShowcase />
          <PaymentSection />
          <CustomerService />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
