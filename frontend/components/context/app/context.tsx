import React, { useReducer, createContext } from "react";
import { IAction } from "./actions";
import reducer from "./reducer";

export interface INotification {
  type: string;
  message: string;
  ttl: null | number;
  id: string;
}

export interface IContextState {
  overlay: {
    visible: boolean;
    components: {
      drawer: {
        open: boolean;
      };
      signIn: {
        open: boolean;
      };
      signUp: {
        open: boolean;
      };
    };
  };
  notifications: INotification[];
}

const initialState = {
  state: {
    overlay: {
      visible: false,
      components: {
        drawer: {
          open: false,
        },
        signIn: {
          open: false,
        },
        signUp: {
          open: false,
        },
      },
    },
    notifications: [],
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
