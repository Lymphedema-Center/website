import React, { useContext } from "react";
import { Context as AppContext } from "../context/app/context";
import { toggleDrawer } from "../context/app/actions";
import styled from "styled-components";

const OverlayView = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 50;
  background-color: rgba(123, 123, 123, 0.5);
`;

const Overlay = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const context = useContext(AppContext);
  return (
    <OverlayView
      {...props}
      style={{
        visibility: context.state.overlayVisible ? "visible" : "hidden",
      }}
      onClick={() => {
        context.dispatch(toggleDrawer());
      }}
    ></OverlayView>
  );
};

export default Overlay;
