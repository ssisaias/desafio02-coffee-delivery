import { styled } from "styled-components";

export const BannerContainer = styled.div`
    border: 1px solid #000;
    background-color: ${props => props.theme['purple-light']};
    display: none;
    flex-direction: column;
    flex-shrink: 0;
    gap: 1rem;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
    }

    img{
        max-width: 80%;
        height: auto;
        align-self: center;
        padding: 3rem;
        background: url(), 50% / cover no-repeat;
    }

    h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        color: ${props => props.theme['base-title']};
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
    }

    span {
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: ${props => props.theme['base-subtitle']};
    }
`
