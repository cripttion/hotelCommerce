import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApiDataProvider } from './states/ApiData';
import { CartProvider } from './states/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <ApiDataProvider>
  <CartProvider>

    <App />
  </CartProvider>
 </ApiDataProvider>
  </React.StrictMode>
);
