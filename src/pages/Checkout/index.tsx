import { CheckoutAddressForm } from "../../components/CheckoutAddressForm";
import { CheckoutOrderSummary } from "../../components/CheckoutOrderSummary";
import { CheckoutPaymentMethod } from "../../components/CheckoutPaymentMethod";
import { CheckoutPageAddressPaymentContainer, CheckoutPageContainer, CheckoutPageSummaryContainer } from "./styles";

export function Checkout() {
  return (
    // comment/uncomment className below to see a lot of cool lines :)
    <CheckoutPageContainer className='debug'>
      <CheckoutPageAddressPaymentContainer>
        <h3>Complete seu pedido</h3>
        <CheckoutAddressForm></CheckoutAddressForm>
        <CheckoutPaymentMethod></CheckoutPaymentMethod>
      </CheckoutPageAddressPaymentContainer>
      <CheckoutPageSummaryContainer>
        <h3>Cafés selecionados</h3>
        <CheckoutOrderSummary></CheckoutOrderSummary>
      </CheckoutPageSummaryContainer>
      
    </CheckoutPageContainer>
  )
}