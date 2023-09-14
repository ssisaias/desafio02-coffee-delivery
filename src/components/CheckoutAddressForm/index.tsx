import { CodepenLogo, MapPinLine } from "@phosphor-icons/react";
import { CepInput, CheckoutAddressFormContainer, CheckoutAddressFormTitle, FormContainer } from "./styles";

export function CheckoutAddressForm() {
  return (
    <CheckoutAddressFormContainer>
      <CheckoutAddressFormTitle>
        <div><MapPinLine color="#C47F17" size="22" weight="bold"></MapPinLine></div>
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </CheckoutAddressFormTitle>
      <FormContainer>
        <CepInput>
          
        </CepInput>
      </FormContainer>
    </CheckoutAddressFormContainer>
  );
}