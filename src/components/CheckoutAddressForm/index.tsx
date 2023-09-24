import { MapPinLine } from "@phosphor-icons/react";
import { BairroInput, CepInput, CheckoutAddressFormContainer, CheckoutAddressFormTitle, CidadeInput, ComplementoInput, FormContainer, NumeroInput, RuaInput, UFInput } from "./styles";
import {z} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { DeliveryAddress } from "../../interface/interfaces";

export function CheckoutAddressForm() {

  const { setCartAddress } = useContext(CartContext);

  // this is our zod schema
  const addressFormSchema = z.object({
    cep: z.string().min(8, '*Obrigatório').max(8),
    rua: z.string().min(1, '*Obrigatório').max(150),
    numero: z.string().min(1, '*Obrigatório').max(999999),
    complemento: z.string().min(0).max(150),
    bairro: z.string().min(1, '*Obrigatório').max(100),
    cidade: z.string().min(1, '*Obrigatório').max(100),
    uf: z.string().min(2, '*Obrigatório').max(2),
  });

  // this is the infered type from the schema, to be used on the form
  type checkoutAddressFormZType = z.infer<typeof addressFormSchema>;

  // this is how we use react-hook-form with zod
  const { register, handleSubmit, formState: {errors} } = useForm<checkoutAddressFormZType>({
    resolver: zodResolver(addressFormSchema),
  });

  // the form submission function
  const submitFormData = (data: checkoutAddressFormZType) => {
    const cartAddress: DeliveryAddress = {
      cep: data.cep,
      street: data.rua,
      number: data.numero,
      complement: data.complemento,
      neighborhood: data.bairro,
      city: data.cidade,
      state: data.uf,
    }
    setCartAddress(cartAddress);
  }

  const submitFormErrorHandler = (err: typeof errors) => {
    console.log('errored');
    console.log(err);
  }

  return (
    <CheckoutAddressFormContainer>
      <CheckoutAddressFormTitle>
        <div><MapPinLine color="#C47F17" size="22" weight="bold"></MapPinLine></div>
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </CheckoutAddressFormTitle>
      <FormContainer id="address-form" onSubmit={handleSubmit(submitFormData, submitFormErrorHandler)}>
          <CepInput type="text" {...register('cep')}
            placeholder="CEP">
          </CepInput>
          <span>{errors.cep?.message}</span>
          <RuaInput type="text" {...register('rua')}
            placeholder="Rua">
          </RuaInput>
          <span>{errors.rua?.message}</span>
          <NumeroInput type="text" {...register('numero')}
            placeholder="Número">
          </NumeroInput>
          <span>{errors.numero?.message}</span>
          <ComplementoInput type="text" {...register('complemento')}
            placeholder="Complemento">
          </ComplementoInput>
          <span>{errors.complemento?.message}</span>
          <BairroInput type="text" {...register('bairro')}
            placeholder="Bairro">
          </BairroInput>
          <span>{errors.bairro?.message}</span>
          <CidadeInput type="text" {...register('cidade')}
            placeholder="Cidade">
          </CidadeInput>
          <span>{errors.cidade?.message}</span>
          <UFInput type="text" {...register('uf')}
            placeholder="UF">
          </UFInput>
          <span>{errors.uf?.message}</span>
      </FormContainer>
    </CheckoutAddressFormContainer>
  );
}