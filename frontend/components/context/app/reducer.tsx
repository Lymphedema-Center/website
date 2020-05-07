import { IContextState } from "./context";
import { IAction, Action } from "./actions";
import { any } from "../../helpers";

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

    default:
      return state;
  }
};

export default reducer;
