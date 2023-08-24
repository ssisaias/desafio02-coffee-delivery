import styled from "styled-components";

export const RoundIconBg = styled.div<{ $themeBgColor?: string; }>`
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

export const SquareIconBg = styled.div<{ $themeBgColor?: string; $cursor: string}>`
    width: 2rem;
    height: 2rem;
    background-color: ${props => (props.$themeBgColor ? props.theme[props.$themeBgColor] : props.theme['base-text'])};
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 0.5rem;
    cursor: ${props => props.$cursor? props.$cursor : 'default'};
`