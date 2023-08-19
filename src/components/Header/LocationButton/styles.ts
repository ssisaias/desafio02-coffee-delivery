import { styled } from "styled-components";

export const LocationButton = styled.button`
 background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border: none;
  padding: 10px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    align-self: center;
  }

  svg{
    align-self: center;
    margin-right: 6px;
    margin-left: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme['purple']};;
    color: ${(props) => props.theme['white']};;
  }
`