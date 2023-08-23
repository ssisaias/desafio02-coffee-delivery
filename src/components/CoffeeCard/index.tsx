import { CoffeeInterface } from "../../interface/interfaces"
import images from "../../util/imageResolver"
import { CCHeaderImg } from "./coffeeCardImgHeader/styles"
import { CCHeaderTag, CCHeaderTags } from "./coffeeCardTags/styles"
import { CoffeeCardContainer } from "./styles"

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
        </CoffeeCardContainer>
    )
}