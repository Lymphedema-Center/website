import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { Context as AppContext } from "../context/app/context";
import { useTransition, animated } from "react-spring";
import { toggleDrawer } from "../context/app/actions";
import Drawer from "../composed/Drawer";

const OverlayView = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 50;
  background-color: rgba(123, 123, 123, 0.5);
`;

const EDrawer = styled(Drawer)`
  position: relative;
  top: 0;
  left: 0;
`;

const Overlay = (
  props: { visible: boolean } & React.HTMLAttributes<HTMLDivElement>
) => {
  const appCtx = useContext(AppContext);
  const overlayRef = useRef<HTMLDivElement>(null);
  const drawerTransition = useTransition(
    appCtx.state.overlay.components.drawer.open,
    null,
    {
      from: { transform: "translateX(-100%)" },
      enter: { transform: "translateX(0%)" },
      leave: { transform: "translateX(-100%)" },
      config: { tension: 380, clamp: true },
    }
  );

  return (
    <OverlayView
      {...props}
      ref={overlayRef}
      style={{ visibility: props.visible ? "visible" : "hidden" }}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        appCtx.dispatch(toggleDrawer());
      }}
    >
      {drawerTransition.map(({ item, props }) =>
        item ? (
          <Drawer
            key="drawerkey"
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              event.stopPropagation()
            }
            style={props}
          />
        ) : null
      )}
    </OverlayView>
  );
};

export default Overlay;
