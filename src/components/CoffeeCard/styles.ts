import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
    width: 256px;
    height: 310px;
    flex-shrink: 0;
    border-radius: 6px 36px;
    background: ${props => props.theme['base-card']};
    display: block;

    @media (max-width: 768px) {
        width: 90%;
    }
`