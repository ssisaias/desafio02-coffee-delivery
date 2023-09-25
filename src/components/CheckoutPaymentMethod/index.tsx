import { Bank, CreditCard, CurrencyDollarSimple, Money } from "@phosphor-icons/react";
import { CheckoutPaymentButton, CheckoutPaymentButtonContainer, CheckoutPaymentMethodContainer, CheckoutPaymentTitle } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export function CheckoutPaymentMethod() {
  
  const {cart, setPaymentMethod} = useContext(CartContext);
  const [ccActive, setccActive] = useState(cart.selectedPaymentMethod === 'CARTÃO DE CRÉDITO');
  const [cdActive, setcdActive] = useState(cart.selectedPaymentMethod === 'CARTÃO DE DÉBITO');
  const [moneyActive, setmoneyActive] = useState(cart.selectedPaymentMethod === 'DINHEIRO');

  function handleSetPaymentMethod(payId: number) {

    return () => {
      switch (payId) {
        case 1:
          setccActive(true);
          setcdActive(false);
          setmoneyActive(false);
          setPaymentMethod('CARTÃO DE CRÉDITO');
          break;
        case 2:
          setcdActive(true);
          setccActive(false);
          setmoneyActive(false);
          setPaymentMethod('CARTÃO DE DÉBITO');
          break;
        case 3:
          setmoneyActive(true);
          setccActive(false);
          setcdActive(false);
          setPaymentMethod('DINHEIRO');
          break;
        default:
          break;
      }
    }
  }

  return (
    <CheckoutPaymentMethodContainer>
      <CheckoutPaymentTitle>
        <div><CurrencyDollarSimple color="#8047F8" size="22" weight="bold"></CurrencyDollarSimple></div>
        <div>
          <span>Pagamento</span>
          <p>O Pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </CheckoutPaymentTitle>
      <CheckoutPaymentButtonContainer>
        <CheckoutPaymentButton $active={ccActive} onClick={handleSetPaymentMethod(1)}>
          <CreditCard size={16} color="#8047F8"></CreditCard>
          <p>CARTÃO DE CRÉDITO</p>
        </CheckoutPaymentButton>
        <CheckoutPaymentButton $active={cdActive} onClick={handleSetPaymentMethod(2)}>
          <Bank size={16} color="#8047F8"></Bank>
          <p>CARTÃO DE DÉBITO</p>
        </CheckoutPaymentButton>
        <CheckoutPaymentButton $active={moneyActive} onClick={handleSetPaymentMethod(3)}>
          <Money size={16} color="#8047F8"></Money>
          <p>DINHEIRO</p>
        </CheckoutPaymentButton>
      </CheckoutPaymentButtonContainer>
    </CheckoutPaymentMethodContainer>
  );
}