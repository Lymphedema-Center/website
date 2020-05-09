import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { filterProps } from "../../helpers";

const Container = styled(animated.div)`
  background-color: ${(props) => props.theme.colors.fill.grayscale.c100};
  border-radius: 10px;
  height: 100%;
  width: 100%;
  max-width: 700px;
  max-height: 900px;
  overflow: hidden;
  box-shadow: "2px 4px 4px rgba(0, 0, 0, 0.4)";
`;

const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: max-content minmax(0, 1fr);
`;

// header
const Header = styled.div`
  height: 70px;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c350};
  padding: 15px;
  gap: 5px;
`;
const BoldName = styled.p`
  margin: 0;
  font-size: 1.8em;
  color: ${(props) => props.theme.colors.text.normal};
  font-weight: 500;
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
`;

// scroll container
const ScrollContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const LogModal = (
  props: {
    headertext: string;
    buttons: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
) => {
  return (
    <Container {...filterProps(props, [])}>
      <Layout>
        <Header>
          <BoldName>{props.headertext}</BoldName>
          <ButtonContainer>{props.buttons}</ButtonContainer>
        </Header>
        <ScrollContainer>{props.children}</ScrollContainer>
      </Layout>
    </Container>
  );
};

export default LogModal;
