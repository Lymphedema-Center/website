import { IContextState } from "./context";
import { IAction, Action } from "./actions";
import { any } from "../../helpers";
import { v4 as uuidv4 } from "uuid";

const reducer = (state: IContextState, action: IAction) => {
  switch (action.type) {
    // drawer actions
    case Action.ToggleDrawer:
      const drawerOpen = !state.overlay.components.drawer.open;
      const newComponents = { ...state.overlay.components };
      newComponents.drawer.open = drawerOpen;
      const newVisibility = any([
        ...Object.values(newComponents).map((component) => component.open),
        drawerOpen,
      ]);
      return {
        ...state,
        overlay: {
          visible: newVisibility,
          components: newComponents,
        },
      };

    // notification actions
    case Action.AddNotification:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            type: action.payload.type,
            message: action.payload.message,
            ttl: action.payload.ttl,
            id: uuidv4(),
          },
        ],
      };
    case Action.RemoveNotification:
      return {
        ...state,
        notifications: state.notifications.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default reducer;
