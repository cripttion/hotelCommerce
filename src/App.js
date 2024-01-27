import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Header from './components/head/Header';


function App() {
  return (
    <Router>
      
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />

        </Routes>
    </Router>
  );
}

export default App;
