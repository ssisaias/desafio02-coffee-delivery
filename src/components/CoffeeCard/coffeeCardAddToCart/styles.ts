import { styled } from "styled-components";

export const CCAddToCartContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 13rem;
    height: auto;
    align-items: center; 
    margin-left: 1.5rem;
`

export const CCAddToCartPriceTag = styled.div`
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme['base-text']};
`

export const CCAddToCartQuantity = styled.div`
    max-width: 4.5rem;
    height: 1rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 0.375rem;
    background-color: ${props => props.theme['base-button']};
    margin-left: 0.5rem;

    button{
        border: none;
        cursor: pointer;
        padding-top: 4px;
        border-radius: 0.3rem;
        background: none;
    }
`

export const CCAddToCartButton = styled.div`
    margin: 0 0 0.5rem 0.8rem;
`