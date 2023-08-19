import { BannerContainer, RoundCircle } from "./styles";
import BannerCup  from '../../assets/banner_cup.svg'
import { IconContext, ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";

export function Banner(){
    return (
        <BannerContainer>
            <IconContext.Provider
                value={{
                    color: 'white',
                    size: '1rem',
                    weight: "fill",
                }}
            >
            <div>
                <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
                <span>Com o Cooffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                
                <table>
                    <tr>
                        <td><RoundCircle $themeBgColor="yellow-dark"><ShoppingCart /></RoundCircle></td>
                        <td>Compra Simples e Segura</td>
                    </tr>
                    <tr>
                        <td><RoundCircle $themeBgColor="yellow"><Timer /></RoundCircle></td>
                        <td>Entrega rápida e rastreada</td>
                    </tr>
                    <tr>
                        <td><RoundCircle><Package /></RoundCircle></td>
                        <td>Embalagem mantém o café intacto</td>
                    </tr>
                    <tr>
                        <td><RoundCircle $themeBgColor="purple"><Coffee /></RoundCircle></td>
                        <td>O café chega fresquinho até você</td>
                    </tr>
                </table>
            </div>
            </IconContext.Provider>
            <div>
                <img src={BannerCup} alt="Banner Cup" />
            </div>
        </BannerContainer>
    )
}