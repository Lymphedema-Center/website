import React from "react";
import styled from "styled-components";

const OverlayView = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 50;
  background-color: rgba(123, 123, 123, 0.5);
`;

const Overlay = (
  props: { visible: boolean } & React.HTMLAttributes<HTMLDivElement>
) => (
  <OverlayView
    {...props}
    style={{ visibility: props.visible ? "visible" : "hidden" }}
  />
);

export default Overlay;
