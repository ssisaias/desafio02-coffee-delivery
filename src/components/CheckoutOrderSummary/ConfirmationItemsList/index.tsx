import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CoffeeCardProps } from "../../../props/commonsProps";
import images from "../../../util/imageResolver";

import { CSMiddleContainer, CheckoutSummaryItemCard, CheckoutSummaryQuantityButtons, CheckoutSummaryRemoveButton } from "./styles";
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";


export function ConfirmationItemList({ coffeeItem, quantity }: CoffeeCardProps) {

  const { setItemQuantity, removeItem } = useContext(CartContext);

  function handleQuantityIncrease() {
    if (quantity && quantity < 99) {
      setItemQuantity(coffeeItem.id, (quantity + 1));
    }
  }

  function handleQuantityDecrease() {
    if (quantity && quantity > 1) {
      setItemQuantity(coffeeItem.id, (quantity - 1));
    }
  }

  function singleItemPrice() {
    const price = coffeeItem.price * (quantity ? quantity : 0);
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  }

  function handleRemoveItem(id: string) {
    return () => {
      removeItem(id);
    }
  }

  return (
    <CheckoutSummaryItemCard>
      <img src={images[coffeeItem.image]} alt="cart-item" />
      <div>
        <div>{coffeeItem.name}</div>
        <CSMiddleContainer>
          <CheckoutSummaryQuantityButtons>
            <button onClick={handleQuantityDecrease}><Minus weight="regular" size={'0.875rem'} color="#8047F8"></Minus></button>
            <span>{quantity}</span>
            <button onClick={handleQuantityIncrease}><Plus weight="regular" size={'0.875rem'} color="#8047F8"></Plus></button>
          </CheckoutSummaryQuantityButtons>
          <CheckoutSummaryRemoveButton onClick={handleRemoveItem(coffeeItem.id)}>
            <Trash weight="regular" color="#8047F8"></Trash> <span>Remover</span>
          </CheckoutSummaryRemoveButton>
        </CSMiddleContainer>
      </div>
      <p>{singleItemPrice()}</p>
    </CheckoutSummaryItemCard>
  )
}