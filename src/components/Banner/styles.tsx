import { styled } from "styled-components";

export const BannerContainer = styled.div`
    flex-direction: column;
    flex-shrink: 0;
    gap: 1rem;
    text-align: left;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 768px) {
        /* hide the image in smallers screens */
        img{display: none}
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

    table {
        display: table-cell;
        column-count: 2;
        padding: 1rem;
    }
`
export const RoundCircle = styled.div<{ $themeBgColor?: string; }>`
    width: 2rem;
    height: 2rem;
    background-color: ${props => (props.$themeBgColor ? props.theme[props.$themeBgColor] : props.theme['base-text'])};
    border-radius: 66.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 8px;
`