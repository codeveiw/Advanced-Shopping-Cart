import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
const shopppingCartContext = createContext({});
const initialCartItems=localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : []
const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState(initialCartItems);
  useEffect(()=>{
    localStorage.setItem("shopping-cart",JSON.stringify(cartItems))
  },[cartItems])
  const cartQuantity =cartItems.reduce((quantity,item)=>(item.quantity + quantity),0)

  const [isOpen,setIsOpen]=useState(false)
const openCart =()=>{
    setIsOpen(true)
}
const closeCart =()=>{
    setIsOpen(false)
}
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItem((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItem((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return cartItems.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItemFormCart = (id) => {
    setCartItem((currentItem) => currentItem.filter((item) => item.id !== id));
  };
  return (
    <shopppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFormCart,
        openCart,
        closeCart,
        cartQuantity
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </shopppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(shopppingCartContext);
};
