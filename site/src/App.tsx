import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import CustomerService from './components/CustomerService';
import Footer from './components/Footer';
import CheckoutPage from './components/CheckoutPage';
import BillingPage from './components/BillingPage';
import { CartProvider } from './lib/CartContext';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ProductShowcase />
        <CustomerService />
      </div>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/billing" element={<BillingPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
