import { CoffeeListContainer, CCList } from "./styles";
import coffees  from '../../db/coffees.json';
import { CoffeeCard } from "../CoffeeCard";

const coffeeList = coffees;

export function CoffeeList() {

  return (
        <CoffeeListContainer>
          {coffeeList.length > 0 ?
          <> 
            <h2>Nossos cafés</h2>
            <CCList>
              {coffeeList.map(coffee => (
                <CoffeeCard key={coffee.id} coffeeItem={coffee} />
              ))}
            </CCList>
          </>  :
          <h3>Estamos sem cafeína. Volte mais tarde.</h3> }
        </CoffeeListContainer>
    )
}