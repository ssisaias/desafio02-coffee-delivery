import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";
import { RoundIconBg } from "../ui/IconBackground/styles";

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
                <TwoColumnsTable>
                    <table >
                        <tr>
                            <td><RoundIconBg $themeBgColor="yellow-dark"><ShoppingCart /></RoundIconBg></td>
                            <td>Compra Simples e Segura</td>
                        </tr>
                        <tr>
                            <td><RoundIconBg $themeBgColor="yellow"><Timer /></RoundIconBg></td>
                            <td>Entrega rápida e rastreada</td>
                        </tr>
                        <tr>
                            <td><RoundIconBg><Package /></RoundIconBg></td>
                            <td>Embalagem mantém o café intacto</td>
                        </tr>
                        <tr>
                            <td><RoundIconBg $themeBgColor="purple"><Coffee /></RoundIconBg></td>
                            <td>O café chega fresquinho até você</td>
                        </tr>
                    </table>
                </TwoColumnsTable>
            </div>

            <div>
                <img src={BannerCup} alt="Banner Cup" />
            </div>
        </BannerContainer>
    )
}