import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import UnderlineTitle from "../decoration/UnderlineTitle";
import { filterProps } from "../helpers";
import SvgButton from "../button/SvgButton";
import CloseIcon from "../svg/icon/CloseIcon";

const Container = styled.form`
  background-color: ${(props) => props.theme.colors.fill.grayscale.c100};
  width: 100%;
  max-width: 500px;
  padding: 50px 20px;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  position: relative;
  box-shadow: "2px 4px 4px rgba(0, 0, 0, 0.4)";

  @media (min-width: ${(props) => props.theme.layout.tablet.breakpoint}) {
    padding: 50px;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c200};
  border-radius: 100px;
  cursor: pointer;
  outline: none;
  height: 32px;
  width: 32px;
  display: grid;
  align-items: center;
  justify-items: center;

  &:active {
    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
    }
  }
`;

const AuthModal = (
  props: { message: string; closefn: () => void } & React.HTMLAttributes<
    HTMLFormElement
  >
) => {
  const theme = useContext(ThemeContext);

  return (
    <Container {...filterProps(props, ["title"])}>
      <CloseButton
        onClick={(e: any) => {
          e.preventDefault();
          props.closefn();
        }}
      >
        <CloseIcon size="65%" />
      </CloseButton>
      <UnderlineTitle
        message={props.message}
        color={theme.colors.fill.brand.skin}
      />
      {props.children}
    </Container>
  );
};

export default AuthModal;
