import { HeaderContainer } from './styles'

import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { LocationButton } from './LocationButton/styles';
import { CartButton } from './Cartbutton/styles';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


const currentCity = `Uh, sama lama duma lama, you assumin' I'm a human`;

export function Header() {
  
  const cartContext = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink to={'/'} title='checkout'>
        <img src={Logo} alt="home" />
      </NavLink>
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
            
              <ShoppingCart size={24}/> <span>{cartContext.getItemQuantity()}</span>
            
          </CartButton>
        </NavLink>
        
      </nav>
    </HeaderContainer>
  )
}
