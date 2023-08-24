import styled from 'styled-components';

export const CoffeeListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;

    h2, h3 {
        font-family: 'Baloo 2', cursive;
        font-size: 2rem;
        color: ${props => props.theme['base-subtitle']}
    }
    h3 {
        flex: content;
    }

`

export const CCList = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 18px;
    gap: 1.8rem;
    max-width: 100%;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
