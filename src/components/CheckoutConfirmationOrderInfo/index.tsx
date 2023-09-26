import { MapPin, Money, Timer } from "@phosphor-icons/react";
import { RoundIconBg } from "../ui/IconBackground/styles";
import { CheckoutConfirmationOrderInfoContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function CheckoutConfirmationOrderInfo() {

  const { cart } = useContext(CartContext);
  return (
    <CheckoutConfirmationOrderInfoContainer>
      <table >
        <tr>
          <td><RoundIconBg $themeBgColor="purple"><MapPin /></RoundIconBg></td>
          <td>
            <span>Entrega em <strong>{cart.deliveryAddress?.street}, {cart.deliveryAddress?.number}</strong></span>
            <br />
            <span>{cart.deliveryAddress?.neighborhood}  - {cart.deliveryAddress?.city}, {cart.deliveryAddress?.state}</span>
          </td>
        </tr>
        <tr>
          <td><RoundIconBg $themeBgColor="yellow-dark"><Timer /></RoundIconBg></td>
          <span>Previsão de Entrega</span>
          <br />
          <span><strong>20 min -30 min</strong></span>
        </tr>
        <tr>
          <td><RoundIconBg $themeBgColor="yellow"><Money /></RoundIconBg></td>
          <span>Pagamento na Entrega</span>
          <br />
          <span><strong>{cart.selectedPaymentMethod}</strong></span>
        </tr>
      </table>
    </CheckoutConfirmationOrderInfoContainer>
  )
}
