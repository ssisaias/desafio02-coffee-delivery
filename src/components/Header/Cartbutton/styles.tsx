import { styled } from "styled-components";

export const CartButton = styled.button`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border: none;
  padding: 10px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 16px;
    align-self: center;
  }

  svg{
    align-self: center;
    margin-right: 6px;
    margin-left: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow']};;
    color: ${(props) => props.theme['white']};;
  }
`