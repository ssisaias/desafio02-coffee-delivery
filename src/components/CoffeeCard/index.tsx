import { Minus, MinusSquare, Plus, PlusSquare, ShoppingCart } from "@phosphor-icons/react"
import { CoffeeInterface } from "../../interface/interfaces"
import images from "../../util/imageResolver"
import { SquareIconBg } from "../ui/IconBackground/styles"
import { CCAddToCartButton, CCAddToCartContainer, CCAddToCartPriceTag, CCAddToCartQuantity } from "./coffeeCardAddToCart/styles"
import { CCHeaderImg } from "./coffeeCardImgHeader/styles"
import { CCHeaderTag, CCHeaderTags } from "./coffeeCardTags/styles"
import { CoffeeCardContainer, CCNameDescriptionContainer } from "./styles"

interface CoffeeCardProps {
  coffeeItem: CoffeeInterface
}


export function CoffeeCard({ coffeeItem }: CoffeeCardProps) {

  return (
    <CoffeeCardContainer>
      <CCHeaderImg>
        <img src={images[coffeeItem.image]} alt={coffeeItem.image} />
      </CCHeaderImg>
      <CCHeaderTags>
        {coffeeItem.tags?.map((tag) => {
          return <CCHeaderTag>{tag}</CCHeaderTag>
        })}
      </CCHeaderTags>
      <CCNameDescriptionContainer>
        <h4>{coffeeItem.name}</h4>
        <p>{coffeeItem.description}</p>
      </CCNameDescriptionContainer>
      <CCAddToCartContainer>

        <CCAddToCartPriceTag>
          {coffeeItem.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </CCAddToCartPriceTag>

        <CCAddToCartQuantity>
          <button><Minus weight="regular" size={'0.875rem'} color="#8047F8"></Minus></button>
            <span>1</span>
          <button><Plus weight="regular" size={'0.875rem'} color="#8047F8"></Plus></button>
        </CCAddToCartQuantity>
        <CCAddToCartButton>
          <SquareIconBg title="Adicionar ao carrinho" onClick={() => { console.log("add to cart") }} $themeBgColor="purple-dark" $cursor="pointer">
            <ShoppingCart ></ShoppingCart>
          </SquareIconBg>
        </CCAddToCartButton>

      </CCAddToCartContainer>
    </CoffeeCardContainer>
  )
}