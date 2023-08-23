import styled from "styled-components";

export const CCHeaderTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: -2vh;
`

export const CCHeaderTag = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0.5rem 0;
  background-color: ${(props) => props.theme['yellow-light']};
  width: fit-content;
  padding: 0.25rem 0.5rem; 
  border-radius: 6.25rem;
  justify-content: center;
  gap: 0.25rem;
`;