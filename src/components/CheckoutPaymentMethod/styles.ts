import styled from "styled-components";

export const CheckoutPaymentMethodContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch; 
  border-radius: 0.375rem;
  background: ${props => props.theme['base-card']};
`;

export const CheckoutPaymentTitle = styled.div`
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
`;

export const CheckoutPaymentButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch; 
`

export const CheckoutPaymentButton = styled.button`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0; 
  border-radius: 0.375rem;
  background: ${props => props.theme['base-button']}; 
  cursor: pointer;

  &:hover{
    background: ${props => props.theme['base-button-hover']}; 
  }

`

