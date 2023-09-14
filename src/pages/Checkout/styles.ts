import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    margin-top: 36px;
    display: flex;
    flex-direction: row;
    h3{
        color: ${props => props.theme['base-subtitle']};
        font-family: 'Baloo 2';
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        margin-left: 4px;
    }

    div{
        ${
        props => props.className === 'debug' && `
            border: 0.3px solid #ccc;;
        `
        }
    }
`

export const CheckoutPageAddressPaymentContainer = styled.div`
    width: 70%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
`

export const CheckoutPageSummaryContainer = styled.div`
    width: 30%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
`