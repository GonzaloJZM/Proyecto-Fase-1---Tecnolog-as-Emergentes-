import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para el detalle del producto

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, selectedProduct, setSelectedProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);