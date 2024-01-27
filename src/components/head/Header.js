import React from 'react'
import { useApiDataContext } from '../../states/ApiData'
import './head.css';
import { ShoppingCartIcon } from 'lucide-react';
import { useCartContext } from '../../states/CartContext';
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    const  apiData = useApiDataContext(); 
    const {cartList} = useCartContext();
    // console.log(apiData);
  return (
   
        <nav className='navbar'>
            <div className='resturantName' style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>{apiData&&apiData[0].branch_name
}</div>
            <div className='myorder' style={{cursor:'pointer'}} onClick={()=>{navigate('/cart')}}>
                <div className='order'>My Orders</div>
                
                <div className='cartIcon'>
                    <span className='itemnumber'>{cartList&&cartList.length}</span>
                    <ShoppingCartIcon size={30} />
                </div>
            </div>
        </nav>
    
  )
}

export default Header