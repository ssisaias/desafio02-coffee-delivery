import { Bank, CreditCard, CurrencyDollarSimple, Money } from "@phosphor-icons/react";
import { CheckoutPaymentButton, CheckoutPaymentButtonContainer, CheckoutPaymentMethodContainer, CheckoutPaymentTitle, PaymentMethodTitle } from "./styles";

export function CheckoutPaymentMethod() {
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
        <CheckoutPaymentButton>
          <CreditCard size={16} color="#8047F8"></CreditCard>
          <p>CARTÃO DE CRÉDITO</p>
        </CheckoutPaymentButton>
        <CheckoutPaymentButton>
          <Bank size={16} color="#8047F8"></Bank>
          <p>CARTÃO DE DÉBITO</p>
        </CheckoutPaymentButton>
        <CheckoutPaymentButton>
          <Money size={16} color="#8047F8"></Money>
          <p>DINHEIRO</p>
        </CheckoutPaymentButton>
      </CheckoutPaymentButtonContainer>
    </CheckoutPaymentMethodContainer>
  );
}