import React, { createContext, useEffect, useState } from "react";
 
const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartBarOpen,setCartBarOpen] = useState(false)
  const [cart, setCart] = useState(() => {
    const cartItems = localStorage.getItem("cart");
    return cartItems ? JSON.parse(cartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
 
   

  const addToCart = (item, quantity = 1) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    // setCartBarOpen(true)
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const clearCart = () => {
    setCart([]);
  };

  const handleCartBarOpen = () =>{
    setCartBarOpen(true);
  }
  
  const handleCartBarClose = () =>{
    setCartBarOpen(false);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity ,cartBarOpen,handleCartBarClose,handleCartBarOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
