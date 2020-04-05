export enum Action {}

export interface IAction {
  type: Action;
  payload: {
    [key: string]: any;
  };
}
