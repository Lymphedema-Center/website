import { IContextState } from "./context";
import { IAction, Action } from "./actions";
import { any } from "../../helpers";

const reducer = (state: IContextState, action: IAction) => {
  switch (action.type) {
    // drawer actions
    case Action.ToggleDrawer:
      const drawerOpen = !state.overlay.components.drawer.open;
      const newVisibility = any([
        ...Object.values(state.overlay.components).map(
          (component) => component.open
        ),
        drawerOpen,
      ]);
      return {
        ...state,
        overlay: {
          visible: newVisibility,
          components: {
            ...state.overlay.components,
            drawer: {
              open: drawerOpen,
            },
          },
        },
      };

    default:
      return state;
  }
};

export default reducer;
