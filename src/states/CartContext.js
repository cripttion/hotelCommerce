// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCartItem = (item) => {
    const existingItem = cartList.find((cartItem) => cartItem.dish_id === item.dish_id);

    if (existingItem) {
      setCartList((prevCartList) =>
        prevCartList.map((cartItem) =>
          cartItem.dish_id === item.dish_id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartList((prevCartList) => [...prevCartList, { ...item, quantity: 1 }]);
    }
  };

  const removeCartItem = (item) => {
    setCartList((prevCartList) => prevCartList.filter((cartItem) => cartItem.dish_id !== item.dish_id));
  };

  const removeAllCartItems = () => {
    setCartList([]);
  };

  const incrementCartItemQuantity = (item) => {
    setCartList((prevCartList) =>
      prevCartList.map((cartItem) =>
        cartItem.dish_id === item.dish_id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decrementCartItemQuantity = (item) => {
    setCartList((prevCartList) =>
      prevCartList.map((cartItem) =>
        cartItem.dish_id === item.dish_id && cartItem.quantity >= 0
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext, CartContext };
