import { ConfirmationCardContainer, ConfirmationCardSubmitButton, ConfirmationCardSummaryText, ConfirmationCardSummaryTotalText } from "./styles";

const cofeesmock = [
  {
    "id": "1",
    "name": "Expresso Tradicional",
    "description": "O tradicional café feito com água quente e grãos moídos",
    "price": 9.90,
    "tags": ["tradicional","tradicional", "tradicional"],
    "image": "Expresso"
},
{
    "id": "2",
    "name": "Expresso Americano",
    "description": "Expresso diluído, menos intenso que o tradicional",
    "price": 9.90,
    "tags": ["especial", "alcoolico", "gelado"],
    "image": "Americano"
}
];

export function CheckoutOrderSummary() {

  return (
    <ConfirmationCardContainer>

      <hr></hr>
      <ConfirmationCardSummaryText>
        <div><span>Total de Itens</span><span>R$ 29.99</span></div>
      
        <div><span>Entrega</span><span>R$ 3.50</span></div>
      
        <div><h4>Total</h4><h4>R$ 33.49</h4></div>
      </ConfirmationCardSummaryText>
      <ConfirmationCardSubmitButton
      onClick={() => console.log('clicou')}>
        <span>CONFIRMAR PEDIDO</span>
      </ConfirmationCardSubmitButton>
    </ConfirmationCardContainer>
  )
}