import styled from "styled-components";

export const CheckoutConfirmationContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    text-align: justify;
    
    h1{
        /* Title/Title L */
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: 130%; /* 2.6rem */ 
        color: ${props => props.theme['yellow-dark']};
    }
    P{
        /* Text/Regular L */
        font-family: 'Roboto';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.625rem */ 
        color: ${props => props.theme['base-subtitle']};
    }
`