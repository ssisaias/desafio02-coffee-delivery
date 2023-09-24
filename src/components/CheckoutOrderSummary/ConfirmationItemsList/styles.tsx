import styled from "styled-components";

export const CheckoutSummaryItemCard = styled.div`
    display: flex;
    padding: 0.5rem 0.25rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    background: ${props => props.theme['base-card']};
    text-align: left;
    color: ${props => props.theme['base-subtitle']};
    overflow: scroll;
    
    img {
        display: flex;
        width: 4rem;
        height: 4rem;
    }
    
    p{
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        text-align: right;
        color: ${props => props.theme['base-text']};
    }
`

export const CheckoutSummaryQuantityButtons = styled.div`
    max-width: 3.5rem;
    height: 0.75rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 0.375rem;
    background-color: ${props => props.theme['base-button']};
    

    button{
        border: none;
        cursor: pointer;
        padding-top: 4px;
        border-radius: 0.3rem;
        background: none;
    }
`

export const CSMiddleContainer = styled.div`
    display: flex;
    align-items: row;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    gap: 0.25rem;
`

export const CheckoutSummaryRemoveButton = styled.button`
    display: flex;
    height: 1.75rem;
    align-items: center; 
    border-radius: 0.375rem;
    gap: 0.125rem;
    border: none;
    cursor: pointer;
    background: ${props => props.theme['base-button']};

    span {
        color: ${props => props.theme['base-text']};
    }
`