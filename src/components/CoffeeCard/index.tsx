import { ShoppingCart } from "@phosphor-icons/react"
import { CoffeeInterface } from "../../interface/interfaces"
import images from "../../util/imageResolver"
import { SquareIconBg } from "../ui/IconBackground/styles"
import { CCHeaderImg } from "./coffeeCardImgHeader/styles"
import { CCHeaderTag, CCHeaderTags } from "./coffeeCardTags/styles"
import { CoffeeCardContainer, CCNameDescriptionContainer } from "./styles"

interface CoffeeCardProps {
    coffeeItem: CoffeeInterface
}


export function CoffeeCard({coffeeItem}: CoffeeCardProps){
    
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
        </CoffeeCardContainer>
    )
}