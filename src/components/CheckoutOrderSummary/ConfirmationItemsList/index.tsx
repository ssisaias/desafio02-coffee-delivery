import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CoffeeCardProps } from "../../../props/commonsProps";
import images from "../../../util/imageResolver";

import { CSMiddleContainer, CheckoutSummaryItemCard, CheckoutSummaryQuantityButtons, CheckoutSummaryRemoveButton } from "./styles";

export function ConfirmationItemList({ coffeeItem }: CoffeeCardProps){
    return (
        <CheckoutSummaryItemCard>
            <img src={images[coffeeItem.image]} alt="cart-item" />
            <div>
                <div>Expresso tradicional</div>
                <CSMiddleContainer>
                    <CheckoutSummaryQuantityButtons>
                    <button><Minus weight="regular" size={'0.875rem'} color="#8047F8"></Minus></button>
                        <span>99</span>
                    <button><Plus weight="regular" size={'0.875rem'} color="#8047F8"></Plus></button>    
                    </CheckoutSummaryQuantityButtons>   
                    <CheckoutSummaryRemoveButton>
                        <Trash weight="regular" color="#8047F8"></Trash> <span>Remover</span>
                    </CheckoutSummaryRemoveButton>                 
                </CSMiddleContainer>
            </div>
            <p>R$ 9999,9999</p>
        </CheckoutSummaryItemCard>
    )
}