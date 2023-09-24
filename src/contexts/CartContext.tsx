import { createContext, useState } from "react";
import { Cart, CartItem, CommonProviderProps } from "../interface/interfaces";
import { v4 as uuidv4 } from 'uuid';

interface CartContextType {
  cart: Cart,
  addItemToCart: (item: CartItem) => void,
  getItemQuantity: () => number,
  setItemQuantity: (itemId: string, quantity: number) => void,
  removeItem : (itemId: string) => void,
  setPaymentMethod: (paymentMethod: string) => void,
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
    recalcTotals();
  }

  function setItemQuantity(itemId: string, quantity: number) {
    const itemInCart = cart.items.find(i => i.CoffeeItem.id === itemId);
    if (itemInCart) {
      itemInCart.quantity = quantity;
    }
    recalcTotals();
  }

  function getItemQuantity() {
    return cart.items.length;
  }

  function removeItem(itemId: string){
    cart.items = cart.items.filter(i => i.CoffeeItem.id !== itemId);
    recalcTotals();
  }

  function recalcTotals() {
    let totalPrice = 0;
    cart.items.forEach(item => {
      totalPrice += item.CoffeeItem.price * item.quantity;
    });
    cart.totalPrice = totalPrice;
    setCart({ ...cart });
  }

  function setPaymentMethod(paymentMethod: string) {
    cart.selectedPaymentMethod = paymentMethod;
    setCart({ ...cart });
  }

  return (
    <CartContext.Provider value={{ cart, addItemToCart, getItemQuantity, setItemQuantity, removeItem, setPaymentMethod }}>
      {children}
    </CartContext.Provider>
  );
}