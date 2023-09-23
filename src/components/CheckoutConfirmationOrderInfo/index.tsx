import { MapPin, Money, Timer } from "@phosphor-icons/react";
import { RoundIconBg } from "../ui/IconBackground/styles";
import { CheckoutConfirmationOrderInfoContainer } from "./styles";

export function CheckoutConfirmationOrderInfo() {
  return (
    <CheckoutConfirmationOrderInfoContainer>
      <table >
        <tr>
          <td><RoundIconBg $themeBgColor="purple"><MapPin /></RoundIconBg></td>
          <td>
            <span>Entrega em <strong>Rua Joao Daniel Matinellu, 102</strong></span>
            <br />
            <span>Farros  - Porto Alegre, RS</span>
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
          <span><strong>Cartão de Crédito</strong></span>
        </tr>
      </table>
    </CheckoutConfirmationOrderInfoContainer>
  )
}
