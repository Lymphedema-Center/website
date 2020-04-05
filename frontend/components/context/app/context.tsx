import React, { useReducer, createContext } from "react";
import { IAction } from "./actions";
import reducer from "./reducer";

export interface IContextState {}

const initialState = {
  state: {},
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
