import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      border: none;
      border-radius: 5px;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      &:hover {
      background-color: ${(props) => props.theme['yellow']};;
      color: ${(props) => props.theme['white']};;

      }
    }
  }
`
