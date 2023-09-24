import styled from 'styled-components'

export const ConfirmationCardContainer = styled.div`
    display: flex;
    /* https://stackoverflow.com/questions/5948049/equivalent-of-width-moz-available-in-google-chrome */
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem; 
    border-radius: 0.375rem 2.75rem; 
    background: ${props => props.theme['base-card']};
    margin-left: 0.2rem;
    hr{
        height: 0rem;
        width: 100%;
        border: 1px solid ${props => props.theme['base-button']};

        stroke-width: 1px;
        stroke: ${props => props.theme['base-button']};
    }
`

export const ConfirmationCardSummaryText = styled.div` 
    width: 100%;
    color: ${props => props.theme['base-text']};
    text-align: right;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    flex-direction: initial;
    flex-wrap: wrap;
    

    div{
        display:flex;
        justify-content: space-between;
        
        width: -moz-available;
        width: -webkit-fill-available;
        width: stretch;
        
    }
`

export const ConfirmationCardSubmitButton = styled.button`
    display: flex;
    padding: 0.75rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    align-self: stretch; 
    border-radius: 0.375rem;
    background: ${props => props.theme['yellow-dark']}; 
    color: ${props => props.theme['white']};
    cursor: pointer;
    transition: background 0.4s;
    border:none;

    span{
        font-family: Roboto;
        font-size: 0.875rem;
        font-weight: 700; 
        line-height: 160%; /* 1.4rem */
        text-transform: uppercase; 
        letter-spacing: 0.05em;
    }

    &&:hover{
        background: ${props => props.theme['yellow']};
    }
`