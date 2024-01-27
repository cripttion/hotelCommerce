import React, { useEffect, useState } from 'react';
import DishCard from '../../components/card/DishCard';
import './home.css';
import { useApiDataContext } from '../../states/ApiData';
import { useCartContext } from '../../states/CartContext';

function Home() {
  const apiData = useApiDataContext();
  const [categoryitemNumber, setCategoryItemNumber] = useState(0);
  const [categoryDishes, setCategoryDishes] = useState({});
  const temp = apiData && apiData[0]?.table_menu_list[0];
  const{addCartItem} = useCartContext();
  useEffect(() => {
    setCategoryDishes(temp);
  }, [temp]);

  const handleMenuFilter = (index, data) => {
    setCategoryItemNumber(index);
    setCategoryDishes(data);
  };

  const handlePlusClick = (data)=>{
      console.log('data',data);
    }
    const handleMinusClick = (data)=>{
        console.log('data',data);
        
    }
    const handleAddToCart = (data)=>{
     addCartItem(data);

 }
//   console.log(categoryDishes);

  return (
    <div className='homeMain'>
      <div className='meucategory'>
        <div className='menuElements'>
          {apiData &&
            apiData[0]?.table_menu_list.map((data, index) => (
              <div
                key={index}
                className={`categoryitem ${
                  categoryitemNumber === index ? 'categoryitemActive' : ''
                }`}
                onClick={() => handleMenuFilter(index, data)}
              >
                <span>{data.menu_category}</span>
              </div>
            ))}
        </div>
      </div>

      <div className='categoryDishes'>
        {categoryDishes?.category_dishes &&
          categoryDishes?.category_dishes.map((dishData, index) => (
            <div key={index}>
              <DishCard
                dishData = {dishData}
                onPlusClick ={()=>handlePlusClick(dishData)}
                onMinusClick = {()=>handleMinusClick(dishData)}
                onAddToCartClick ={()=>handleAddToCart(dishData)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
