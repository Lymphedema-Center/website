import styled from "styled-components";

const MWC = styled.div`
  display: grid;

  & > * {
    grid-column: 2 / span 1;
  }

  grid-template-columns:
    minmax(${props => props.theme.layout.small.margin}, 1fr)
    minmax(0, ${props => props.theme.layout.maxWidth})
    minmax(${props => props.theme.layout.small.margin}, 1fr);
`;

export default MWC;
