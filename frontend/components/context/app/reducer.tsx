import { IContextState } from "./context";
import { IAction, Action } from "./actions";

const reducer = (state: IContextState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
