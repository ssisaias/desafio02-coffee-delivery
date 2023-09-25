import { HeaderContainer } from './styles'

import Logo from '../../assets/Logo.svg'
import { ShoppingCart } from '@phosphor-icons/react'
import { CartButton } from './Cartbutton/styles';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { LocationButton } from './LocationButton';


export function Header() {
  
  const {getItemQuantity} = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink to={'/'} title='checkout'>
        <img src={Logo} alt="home" />
      </NavLink>
      <nav>
        <LocationButton />
        <NavLink to={'/checkout'} title='checkout'>
          <CartButton>
              <ShoppingCart size={24}/> <span>{getItemQuantity()}</span>
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
