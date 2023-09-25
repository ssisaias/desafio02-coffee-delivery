import { ConfirmationCardContainer, ConfirmationCardSubmitButton, ConfirmationCardSummaryText } from "./styles";
import { ConfirmationItemList } from "./ConfirmationItemsList";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function CheckoutOrderSummary() {

  const { cart } = useContext(CartContext);

  function formatCartPrice() {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cart.totalPrice + cart.deliveryAmount);
  }

  return (
    <ConfirmationCardContainer>
      {cart.items.length > 0 ?
        <>
          {cart.items.map(coffee => (
            <>
              <ConfirmationItemList key={coffee.CoffeeItem.id} coffeeItem={coffee.CoffeeItem} quantity={coffee.quantity} />
              <hr></hr>
            </>
          ))}
        </> :
        <h3>Carrinho vazio. 😿</h3>}
      <ConfirmationCardSummaryText>
        <div><span>Total de Itens</span><span>{cart.totalPrice.toLocaleString('pt-BR')}</span></div>

        <div><span>Entrega</span><span>{cart.deliveryAmount.toLocaleString('pt-BR')}</span></div>

        <div><h4>Total</h4><h4>{formatCartPrice()}</h4></div>
      </ConfirmationCardSummaryText>
      <ConfirmationCardSubmitButton
        type="submit"
        form="address-form">
        <span>CONFIRMAR PEDIDO</span>
      </ConfirmationCardSubmitButton>
    </ConfirmationCardContainer>
  )
}