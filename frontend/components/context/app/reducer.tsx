import { IContextState } from "./context";
import { IAction, Action } from "./actions";
import { any } from "../../helpers";

const handleYScroll = (
  prevOverlayVisibility: boolean,
  newOverlayVisibility: boolean
) => {
  // if the visibility of the overlay changes
  if (prevOverlayVisibility !== newOverlayVisibility) {
    // if overlay becomes visible
    if (newOverlayVisibility) {
      const scrollY = globalThis.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `${-scrollY}px`;
    }
    // if the overlay becomes hidden
    else {
      const scrollY = parseInt(document.body.style.top);
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, -scrollY);
    }
  }
};

const reducer = (state: IContextState, action: IAction) => {
  switch (action.type) {
    // drawer actions
    case Action.ToggleDrawer:
      const drawerOpen = !state.drawerOpen;
      const newVisibility = any([drawerOpen]);
      handleYScroll(state.overlayVisible, newVisibility);
      return {
        ...state,
        drawerOpen: drawerOpen,
        overlayVisible: newVisibility,
      };

    default:
      return state;
  }
};

export default reducer;
