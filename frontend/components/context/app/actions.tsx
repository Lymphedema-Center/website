export enum Action {
  ToggleDrawer = "TOGGLE_DRAWER",
  AddNotification = "ADD_NOTIFICATION",
  RemoveNotification = "REMOVE_NOTIFICATION",
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
