import React from "react";
import styled from "styled-components";

const Container = styled.header`
  background-color: ${props => props.theme.colors.fill.grayscale.c600};
  height: 60px;
  width: 100%;
`;

const Header = (props: React.HTMLAttributes<HTMLDivElement>) => <Container />;

export default Header;
