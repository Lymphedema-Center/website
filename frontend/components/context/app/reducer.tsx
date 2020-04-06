import { IContextState } from "./context";
import { IAction, Action } from "./actions";
import { any } from "../../helpers";

const reducer = (state: IContextState, action: IAction) => {
  switch (action.type) {
    // drawer actions
    case Action.ToggleDrawer:
      const drawerOpen = !state.drawerOpen;
      return {
        ...state,
        drawerOpen: drawerOpen,
        overlayVisible: any([drawerOpen]),
      };

    default:
      return state;
  }
};

export default reducer;
