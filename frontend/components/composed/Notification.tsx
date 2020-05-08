import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { filterProps } from "../helpers";
import SuccessIcon from "../svg/icon/SuccessIcon";
import ErrorIcon from "../svg/icon/ErrorIcon";

const Container = styled(animated.div)`
  height: 80px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  background-color: rgba(232, 232, 232, 0.8);
  backdrop-filter: blur(20px) brightness(90%);
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  padding: 0px 20px;
  gap: 20px;
  position: absolute;
  grid-area: notification;
  cursor: pointer;
`;

const GreenSuccessIcon = styled(SuccessIcon)`
  fill: ${(props) => props.theme.colors.fill.colors.success};
`;
const RedErrorIcon = styled(ErrorIcon)`
  fill: ${(props) => props.theme.colors.fill.colors.error};
`;

const Para = styled.p`
  margin: 0;
  font-size: 1.4em;
  color: ${(props) => props.theme.colors.text.normal};
`;

const Notification = (
  props: {
    type: string;
    onClick?: (id: string) => void;
  } & React.HTMLAttributes<HTMLDivElement>
) => {
  return (
    <Container {...filterProps(props, ["type"])}>
      {(() => {
        switch (props.type) {
          case "SUCCESS":
            return <GreenSuccessIcon size="25px" />;
          default:
            return <RedErrorIcon size="25px" />;
        }
      })()}
      <Para>{props.children}</Para>
    </Container>
  );
};

export default Notification;
