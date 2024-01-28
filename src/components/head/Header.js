import React from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import './head.css';
import { useApiDataContext } from '../../states/ApiData';
import { useCartContext } from '../../states/CartContext';

function Header({ handleNavigation }) {
  const apiData = useApiDataContext(); // Replace with your actual API data
  const {cartList} = useCartContext(); // Replace with your actual cart data

  return (
    <nav className='navbar'>
      <div
        className='resturantName'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          handleNavigation('/');
        }}
      >
        {apiData && apiData[0]?.branch_name}
      </div>
      <div
        className='myorder'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          handleNavigation('/cart');
        }}
      >
        <div className='order'>My Orders</div>

        <div className='cartIcon'>
          <span className='itemnumber'>{cartList && cartList.length}</span>
          <ShoppingCartIcon size={30} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
