import { MapPinLine } from "@phosphor-icons/react";
import { BairroInput, CepInput, CheckoutAddressFormContainer, CheckoutAddressFormTitle, CidadeInput, ComplementoInput, FormContainer, NumeroInput, RuaInput, UFInput } from "./styles";

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
        <CepInput
          placeholder="CEP">
        </CepInput>
        <RuaInput
          placeholder="Rua">
        </RuaInput>
        <NumeroInput
          placeholder="Número">
        </NumeroInput>
        <ComplementoInput
          placeholder="Complemento">
        </ComplementoInput>
        <BairroInput
          placeholder="Bairro">
        </BairroInput>
        <CidadeInput
          placeholder="Cidade">
        </CidadeInput>
        <UFInput
          placeholder="UF">
        </UFInput>
      </FormContainer>
    </CheckoutAddressFormContainer>
  );
}