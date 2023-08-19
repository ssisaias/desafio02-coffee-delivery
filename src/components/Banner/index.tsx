import { BannerContainer } from "./styles";
import BannerCup  from '../../assets/banner_cup.svg'

export function Banner(){
    return (
        <BannerContainer>
            <div>
                <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
                <span>Com o Cooffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

                <p>Compra Simples e Segura</p>
                <p>Entrega rápida e rastreada</p>
                <p>Embalagem mantém o café intacto</p>
                <p>O café chega fresquinho até você</p>
            </div>
            <div>
                <img src={BannerCup} alt="Banner Cup" />
            </div>
        </BannerContainer>
    )
}