import React, { useReducer, createContext } from "react";
import { IAction } from "./actions";
import reducer from "./reducer";

export interface IContextState {
  overlay: {
    visible: boolean;
    components: {
      drawer: {
        open: boolean;
      };
    };
  };
}

const initialState = {
  state: {
    overlay: {
      visible: false,
      components: {
        drawer: {
          open: false,
        },
      },
    },
  },
  dispatch: (action: IAction) => {},
};

export const Context = createContext<{
  state: IContextState;
  dispatch: (action: IAction) => void;
}>(initialState);

export const ContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
