import React, { useReducer, createContext, useEffect } from "react";
import { IAction, setUser } from "./actions";
import reducer from "./reducer";
import { Hub, Auth } from "aws-amplify";

export interface INotification {
  type: string;
  message: string;
  ttl: null | number;
  id: string;
}

export interface IUser {
  email: string;
  email_verifified: boolean;
  family_name: string;
  given_name: string;
  sub: string;
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
      resetPass: {
        open: boolean;
      };
    };
  };
  notifications: INotification[];
  user: IUser | null;
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
        resetPass: {
          open: false,
        },
      },
    },
    notifications: [],
    user: null,
  },
  dispatch: (action: IAction) => {},
};

export const Context = createContext<{
  state: IContextState;
  dispatch: (action: IAction) => void;
}>(initialState);

export const ContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  useEffect(() => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          dispatch(setUser(data.payload.data.attributes));
          break;
        case "signOut":
          dispatch(setUser(null));
          break;
      }
    });

    if (!state.user) {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          dispatch(setUser(user.attributes));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
