import React, { useContext } from "react";
import styled from "styled-components";
import { Context as AppContext } from "../context/app/context";
import { useTransition, animated, useSpring } from "react-spring";
import { toggleDrawer } from "../context/app/actions";
import Drawer from "./drawer/Drawer";
import { filterProps } from "../helpers";

const OverlayView = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.4);
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
  const drawerTransition = useTransition(
    appCtx.state.overlay.components.drawer.open,
    null,
    {
      from: {
        transform: "translateX(-100%)",
        boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.4)",
      },
      enter: {
        transform: "translateX(0%)",

        boxShadow: "2px 0px 4px rgba(0, 0, 0, 0)",
      },
      leave: {
        transform: "translateX(-100%)",

        boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.4)",
      },
      config: { tension: 380, clamp: true },
    }
  );
  const [overlaySpring, setOverlaySpring] = useSpring(() => ({
    backgroundColor: `rgba(0, 0, 0, ${props.visible ? 0.4 : 0})`,
    visibility: props.visible
      ? ("visible" as "visible")
      : ("hidden" as "hidden"),
  }));
  setOverlaySpring({
    backgroundColor: `rgba(0, 0, 0, ${props.visible ? 0.4 : 0})`,
    visibility: "visible" as "visible",
    onRest: () => {
      setOverlaySpring({
        visibility: props.visible
          ? ("visible" as "visible")
          : ("hidden" as "hidden"),
      });
    },
  });

  return (
    <OverlayView
      {...filterProps(props, ["visible"])}
      style={overlaySpring}
      onClick={() => {
        if (appCtx.state.overlay.components.drawer.open) {
          appCtx.dispatch(toggleDrawer());
        }
      }}
    >
      {drawerTransition.map(({ item, props }) =>
        item ? (
          <EDrawer
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
