import { IUser, ILog } from "./context";
import { Node } from "slate";

export enum Action {
  ToggleDrawer = "TOGGLE_DRAWER",
  ToggleSignIn = "TOGGLE_SIGN_IN",
  ToggleSignUp = "TOGGLE_SIGN_UP",
  ToggleResetPass = "TOGGLE_RESET_PASS",
  ToggleChangeName = "TOGGLE_CHANGE_NAME",
  ToggleChangePass = "TOGGLE_CHANGE_PASS",
  ToggleCreateLog = "TOGGLE_CREATE_LOG",
  AddNotification = "ADD_NOTIFICATION",
  RemoveNotification = "REMOVE_NOTIFICATION",
  SetUser = "SET_USER",
  AddLog = "ADD_LOG",
  SetLogs = "SET_LOGS",
}

export interface IAction {
  type: Action;
  payload: {
    [key: string]: any;
  };
}

// drawer actions
export const toggleDrawer: () => IAction = () => {
  return {
    type: Action.ToggleDrawer,
    payload: {},
  };
};

export const toggleSignIn: () => IAction = () => {
  return {
    type: Action.ToggleSignIn,
    payload: {},
  };
};

export const toggleSignUp: () => IAction = () => {
  return {
    type: Action.ToggleSignUp,
    payload: {},
  };
};

export const toggleResetPass: () => IAction = () => {
  return {
    type: Action.ToggleResetPass,
    payload: {},
  };
};

export const toggleChangeName: () => IAction = () => {
  return {
    type: Action.ToggleChangeName,
    payload: {},
  };
};

export const toggleChangePass: () => IAction = () => {
  return {
    type: Action.ToggleChangePass,
    payload: {},
  };
};

export const toggleCreateLog: () => IAction = () => {
  return {
    type: Action.ToggleCreateLog,
    payload: {},
  };
};

// notification actions
export const addNotification: (
  type: string,
  message: string,
  ttl: null | number
) => IAction = (type, message, ttl) => {
  return {
    type: Action.AddNotification,
    payload: {
      type,
      message,
      ttl,
    },
  };
};

export const removeNotification: (id: string) => IAction = (id) => {
  return {
    type: Action.RemoveNotification,
    payload: {
      id,
    },
  };
};

// set user
export const setUser: (user: IUser | null) => IAction = (user) => {
  return {
    type: Action.SetUser,
    payload: {
      user,
    },
  };
};

// logs
export const addLog: (title: string, content: Node[]) => IAction = (
  title,
  content
) => {
  return {
    type: Action.AddLog,
    payload: {
      title,
      content,
    },
  };
};

export const setLogs: (logs: ILog[]) => IAction = (logs) => {
  return {
    type: Action.SetLogs,
    payload: {
      logs,
    },
  };
};
