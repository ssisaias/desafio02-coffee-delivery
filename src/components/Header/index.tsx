import { HeaderContainer } from './styles'

import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { LocationButton } from './LocationButton/styles';
import { CartButton } from './Cartbutton/styles';
import { NavLink } from 'react-router-dom';


const currentCity = 'Cidade dos Funcionários';
const cartTotalItems = 0;

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        {/* <LocationButton type='button' title="History">
          <MapPin size={24} />
        </LocationButton> */}
        <LocationButton onMouseEnter={() => {console.log('DisplayCartSummary')}}
        >
          <MapPin size={24}/> <span>{currentCity}</span>
        </LocationButton>

        <NavLink to={'/checkout'} title='checkout'>
          <CartButton>
            
              <ShoppingCart size={24}/> <span>{cartTotalItems}</span>
            
          </CartButton>
          </NavLink>
        
      </nav>
    </HeaderContainer>
  )
}
