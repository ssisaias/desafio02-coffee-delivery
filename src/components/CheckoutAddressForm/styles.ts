import styled from "styled-components";

export const CheckoutAddressFormContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch; 
  border-radius: 0.375rem;
  background: ${props => props.theme['base-card']};
  margin-bottom: 1rem;
`;

export const CheckoutAddressFormTitle = styled.div`
  display: flex;
  text-align: initial;
  align-self: stretch;
  gap: 0.5rem;
  span{
    font-size: 1rem;
    color: ${props => props.theme['base-subtitle']};
  }
  p{
    font-size: 0.875rem; 
    color: ${props => props.theme['base-text']};
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;  
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  display: flex;
  width: 12.5rem;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem; 
  background: ${(props) => props.theme['base-input']};
  border-radius: 0.25rem;
  border: 1px${(props) => props.theme['base-button']}; 

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const CepInput = styled(BaseInput)`
  width: 30%;
`

export const RuaInput = styled(BaseInput)`
  width: 70%;
`

export const NumeroInput = styled(BaseInput)`
  width: 10%;
`
export const ComplementoInput = styled(BaseInput)`
  width: 65%;
  &::placeholder {
    font-style: italic;
  }
`

export const BairroInput = styled(BaseInput)`
  width: 30%;
`

export const CidadeInput = styled(BaseInput)`
  width: 50%;
`

export const UFInput = styled(BaseInput)`
  width: 5%;
`