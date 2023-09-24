import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react"
import images from "../../util/imageResolver"
import { SquareIconBg } from "../ui/IconBackground/styles"
import { CCAddToCartButton, CCAddToCartContainer, CCAddToCartPriceTag, CCAddToCartQuantity } from "./coffeeCardAddToCart/styles"
import { CCHeaderImg } from "./coffeeCardImgHeader/styles"
import { CCHeaderTag, CCHeaderTags } from "./coffeeCardTags/styles"
import { CoffeeCardContainer, CCNameDescriptionContainer } from "./styles"
import { CoffeeCardProps } from "../../props/commonsProps"
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { CartItem } from "../../interface/interfaces"


export function CoffeeCard({ coffeeItem }: CoffeeCardProps) {

  const [currentQuantity, setCurrentQuantity] = useState(1);
  const {addItemToCart} = useContext(CartContext);

  function handleQuantityIncrease(){
    if(currentQuantity < 99){
      setCurrentQuantity(currentQuantity + 1);
    }
  }

  function handleQuantityDecrease(){
    if(currentQuantity>1){
      setCurrentQuantity(currentQuantity - 1);
    }
  }

  function handleAddToCart(){
    const itemToAdd: CartItem = {
      CoffeeItem: coffeeItem,
      quantity: currentQuantity
    }
    addItemToCart(itemToAdd);
    setCurrentQuantity(1);
  }

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
          <button onClick={handleQuantityDecrease}><Minus weight="regular" size={'0.875rem'} color="#8047F8"></Minus></button>
            <span>{currentQuantity}</span>
          <button onClick={handleQuantityIncrease}><Plus weight="regular" size={'0.875rem'} color="#8047F8"></Plus></button>
        </CCAddToCartQuantity>
        <CCAddToCartButton>
          <SquareIconBg title="Adicionar ao carrinho" onClick={handleAddToCart} $themeBgColor="purple-dark" $cursor="pointer">
            <ShoppingCart ></ShoppingCart>
          </SquareIconBg>
        </CCAddToCartButton>

      </CCAddToCartContainer>
    </CoffeeCardContainer>
  )
}