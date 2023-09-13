import { CheckoutAddressForm } from "../../components/CheckoutAddressForm";
import { CheckoutPaymentMethod } from "../../components/CheckoutPaymentMethod";
import { CheckoutPageAddressPaymentContainer, CheckoutPageContainer, CheckoutPageSummaryContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutPageContainer>
      <CheckoutPageAddressPaymentContainer>
        <h3>Complete seu pedido</h3>
        <CheckoutAddressForm></CheckoutAddressForm>
        <CheckoutPaymentMethod></CheckoutPaymentMethod>
      </CheckoutPageAddressPaymentContainer>
      <CheckoutPageSummaryContainer>
        <h3>Cafés selecionados</h3>
      </CheckoutPageSummaryContainer>
      {/* <CheckoutOrderSummary></CheckoutOrderSummary> */}
      
    </CheckoutPageContainer>
  )
}