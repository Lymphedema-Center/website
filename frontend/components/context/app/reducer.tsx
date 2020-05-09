import { IContextState } from "./context";
import { IAction, Action } from "./actions";
import { any } from "../../helpers";
import { v4 as uuidv4 } from "uuid";

const reducer = (state: IContextState, action: IAction) => {
  switch (action.type) {
    // overlay actions
    case Action.ToggleDrawer:
      const drawerOpen = !state.overlay.components.drawer.open;
      let newComponents = { ...state.overlay.components };
      newComponents.drawer.open = drawerOpen;
      let newVisibility = any([
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
    case Action.ToggleSignIn:
      const signInOpen = !state.overlay.components.signIn.open;
      newComponents = { ...state.overlay.components };
      newComponents.signIn.open = signInOpen;
      newVisibility = any([
        ...Object.values(newComponents).map((component) => component.open),
        signInOpen,
      ]);
      return {
        ...state,
        overlay: {
          visible: newVisibility,
          components: newComponents,
        },
      };
    case Action.ToggleSignUp:
      const signUpOpen = !state.overlay.components.signUp.open;
      newComponents = { ...state.overlay.components };
      newComponents.signUp.open = signUpOpen;
      newVisibility = any([
        ...Object.values(newComponents).map((component) => component.open),
        signUpOpen,
      ]);
      return {
        ...state,
        overlay: {
          visible: newVisibility,
          components: newComponents,
        },
      };
    case Action.ToggleResetPass:
      const resetPassOpen = !state.overlay.components.resetPass.open;
      newComponents = { ...state.overlay.components };
      newComponents.resetPass.open = resetPassOpen;
      newVisibility = any([
        ...Object.values(newComponents).map((component) => component.open),
        resetPassOpen,
      ]);
      return {
        ...state,
        overlay: {
          visible: newVisibility,
          components: newComponents,
        },
      };
    case Action.ToggleChangeName:
      const changeNameOpen = !state.overlay.components.changeName.open;
      newComponents = { ...state.overlay.components };
      newComponents.changeName.open = changeNameOpen;
      newVisibility = any([
        ...Object.values(newComponents).map((component) => component.open),
        changeNameOpen,
      ]);
      return {
        ...state,
        overlay: {
          visible: newVisibility,
          components: newComponents,
        },
      };
    case Action.ToggleChangePass:
      const changePassOpen = !state.overlay.components.changePassword.open;
      newComponents = { ...state.overlay.components };
      newComponents.changePassword.open = changePassOpen;
      newVisibility = any([
        ...Object.values(newComponents).map((component) => component.open),
        changePassOpen,
      ]);
      return {
        ...state,
        overlay: {
          visible: newVisibility,
          components: newComponents,
        },
      };
    case Action.ToggleCreateLog:
      const createLogOpen = !state.overlay.components.createLog.open;
      newComponents = { ...state.overlay.components };
      newComponents.createLog.open = createLogOpen;
      newVisibility = any([
        ...Object.values(newComponents).map((component) => component.open),
        createLogOpen,
      ]);
      return {
        ...state,
        overlay: {
          visible: newVisibility,
          components: newComponents,
        },
      };

    // notification actions
    case Action.AddNotification:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            type: action.payload.type,
            message: action.payload.message,
            ttl: action.payload.ttl,
            id: uuidv4(),
          },
        ],
      };
    case Action.RemoveNotification:
      return {
        ...state,
        notifications: state.notifications.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    // set user
    case Action.SetUser:
      return {
        ...state,
        user: action.payload.user,
      };

    // log info
    case Action.AddLog:
      let newLogs = [
        ...state.logs,
        {
          id: uuidv4(),
          createdAt: new Date(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ].sort((a, b) => {
        if (a.createdAt >= b.createdAt) return 1;
        else return -1;
      });
      localStorage.setItem("logs", JSON.stringify(newLogs));
      return {
        ...state,
        logs: newLogs,
      };
    case Action.SetLogs:
      return {
        ...state,
        logs: action.payload.logs,
      };

    default:
      return state;
  }
};

export default reducer;
