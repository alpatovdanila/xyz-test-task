// @flow
export type GetStateFunction = () => Object;

export type Action = {
    type: string,
    payload?: Object,
}

export type ThunkAction = (DispatchFunction, GetStateFunction) => Promise<void> | void;

export type DispatchFunction = (Action | ThunkAction) => void;
