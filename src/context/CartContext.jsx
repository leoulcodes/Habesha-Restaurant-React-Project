

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage when the application starts
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("habesha-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("habesha-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (item) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.id === item.id
      );

      // If item already exists
      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      // New item
      return [
        ...currentItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  // =========================
  // INCREASE
  // =========================

  const increaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // =========================
  // DECREASE
  // =========================

  const decreaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // =========================
  // REMOVE
  // =========================

  const removeFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  // =========================
  // CLEAR CART
  // =========================

  const clearCart = () => {
    setCartItems([]);
  };

  // =========================
  // TOTAL NUMBER OF ITEMS
  // =========================

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // =========================
  // SUBTOTAL
  // =========================

  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.priceETB * item.quantity,
    0
  );

  // Example delivery fee
  const deliveryFee = cartItems.length > 0 ? 60 : 0;

  // Example service fee
  const serviceFee = cartItems.length > 0 ? 40 : 0;

  // Final total
  const cartTotal = cartSubtotal + deliveryFee + serviceFee;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        deliveryFee,
        serviceFee,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => {
  return useContext(CartContext);
};