import { createContext, useState } from "react";
import { Cart, CartItem, CommonProviderProps } from "../interface/interfaces";

interface CartContextType {
  cart: Cart,
  addItemToCart: (item: CartItem) => void,
  getItemQuantity: () => number
}

const CartContext = createContext<CartContextType>({} as CartContextType);;

export function CartContextProvider({ children }: CommonProviderProps) {

  const [cart, setCart] = useState<Cart>({} as Cart);

  function addItemToCart(item: CartItem) {
    const itemInCart = cart.items.find(i => i.CoffeeItem.id === item.CoffeeItem.id);
    if (itemInCart) {
      itemInCart.quantity += item.quantity;
    } else {
      cart.items.push(item);
    }
    setCart({ ...cart });
  }

  function getItemQuantity() {
    return cart.items.length;
  }

  return (
    <CartContext.Provider value={{ cart, addItemToCart, getItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
}