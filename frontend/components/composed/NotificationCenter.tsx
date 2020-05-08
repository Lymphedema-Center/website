import React, { useContext } from "react";
import { useTransition } from "react-spring";
import { Context as AppContext } from "../context/app/context";
import { removeNotification } from "../context/app/actions";
import styled from "styled-components";
import MWC from "../layout/MWC";
import Notification from "./Notification";

const NotificationCenterMWC = styled(MWC)`
  width: 100%;
  margin-top: 15px;
  position: fixed;
  display: grid;
  justify-items: center;
  grid-template-areas: ". notification .";
`;

const NotificationCenter = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const appCtx = useContext(AppContext);
  const transitions = useTransition(
    appCtx.state.notifications,
    (item) => item.id,
    {
      from: { transform: "translate3d(0, -100px, 0)" },
      enter: { transform: "translate3d(0, 0px, 0)" },
      leave: { transform: "translate3d(0, -100px, 0)" },
    }
  );

  appCtx.state.notifications.forEach((item) => {
    if (item.ttl) {
      setTimeout(() => {
        appCtx.dispatch(removeNotification(item.id));
      }, item.ttl);
    }
  });

  return (
    <NotificationCenterMWC>
      {transitions.map(({ item, key, props }) => (
        <Notification
          type={item.type}
          key={key}
          style={props}
          onClick={() => {
            appCtx.dispatch(removeNotification(item.id));
          }}
        >
          {item.message}
        </Notification>
      ))}
    </NotificationCenterMWC>
  );
};

export default NotificationCenter;
