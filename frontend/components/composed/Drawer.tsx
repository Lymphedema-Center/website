import React, { useContext } from "react";
import styled from "styled-components";
import { Context as AppContext } from "../context/app/context";
import { toggleDrawer } from "../context/app/actions";
import { animated } from "react-spring";
import Header from "./drawer/Header";

const DrawerView = styled(animated.div)`
  height: 100%;
  width: 85%;
  max-width: 400px;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c100};
  display: grid;
  grid-template-rows: max-content minmax(0, 1fr);
`;

const Drawer = (props: {} & React.HTMLAttributes<HTMLDivElement>) => {
  const appCtx = useContext(AppContext);

  return (
    <DrawerView {...props}>
      <Header closefn={() => appCtx.dispatch(toggleDrawer())} />
    </DrawerView>
  );
};

export default Drawer;
