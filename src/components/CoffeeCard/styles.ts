import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
    width: 256px;
    height: 310px;
    flex-shrink: 0;
    border-radius: 6px 36px;
    background: ${props => props.theme['base-card']};
    display: block;

`

export const CCNameDescriptionContainer = styled.div`
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    h4{
        font-family: 'Baloo 2';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};
    }
    p{
        font-family: 'Roboto';
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme['base-label']};
    }
`