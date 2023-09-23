import { IconContext } from '@phosphor-icons/react';
import DeliveryImage from '../../assets/delivery_guy.svg';
import { CheckoutConfirmationOrderInfo } from '../../components/CheckoutConfirmationOrderInfo';
import { CheckoutConfirmationContainer } from './styles';

export function CheckoutConfirmation() {
  return (
    <IconContext.Provider
      value={{
        color: 'white',
        size: '1rem',
        weight: "fill",
      }}
    >
      <CheckoutConfirmationContainer>
        <div>
          <h1>Uhu! Pedido confirmado!</h1>
          <p>
            Agora é só aguardar que logo o café chegara até você.
          </p>
          <CheckoutConfirmationOrderInfo />
        </div>
        <div>
          <img src={DeliveryImage} alt="delivery-img" />
        </div>
      </CheckoutConfirmationContainer>
    </IconContext.Provider>
  )
}