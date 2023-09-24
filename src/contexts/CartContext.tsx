import { createContext, useState } from "react";
import { Cart, CartItem, CommonProviderProps } from "../interface/interfaces";
import { v4 as uuidv4 } from 'uuid';

interface CartContextType {
  cart: Cart,
  addItemToCart: (item: CartItem) => void,
  getItemQuantity: () => number
}

const newCart: Cart = {
  uuid: uuidv4(),
  items: [],
  createdDate: new Date(),
  totalPrice: 0,
  deliveryAmount: 0,
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartContextProvider({ children }: CommonProviderProps) {

  const [cart, setCart] = useState<Cart>(newCart);

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