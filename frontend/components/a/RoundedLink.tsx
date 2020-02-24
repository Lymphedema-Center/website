import styled from "styled-components";

const RoundedLink = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  border-radius: 100px;
  background-color: ${props => props.theme.colors.fill.grayscale.c300};
  color: ${props => props.theme.colors.text.normal};
  padding: 10px 20px;
  font-weight: 400;
  font-size: 1.4em;

  &:active {
    box-shadow: inset 0 0 100px 100px
      ${props => props.theme.colors.fill.brand.green};
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 100px 100px
        ${props => props.theme.colors.fill.brand.green};
    }
  }
`;

export default RoundedLink;
