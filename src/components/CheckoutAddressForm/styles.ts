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
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;  
`

const BaseInput = styled.input`
  display: flex;
  width: 12.5rem;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem; 

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const CepInput = styled(BaseInput)`
  flex: 1;
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`