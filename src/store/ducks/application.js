// @flow
import {fetchEmojis} from "./emojis";
import {fetchLanguages} from "./languages";
import type {ThunkAction} from "../types";
import type {ApplicationSlice} from "../types/common";

const SET_PRELOADING = '@application/setPreloading';
const SET_CRASHED = '@application/setCrashed';
const ADD_ERROR = '@application/addError';


export const setPreloading = (preloading: boolean) => ({type: SET_PRELOADING, payload: {preloading}});
export const setCrashed = (crashed: boolean) => ({type: SET_CRASHED, payload: {crashed}});
export const addError = ({message, fatal = false}:{message:string, fatal:boolean}) => ({type: ADD_ERROR, payload: {error:{message, fatal}}});

type SetPreloadingAction = { type: '@application/setPreloading', payload: { preloading: boolean } }
type SetCrashedAction = { type: '@application/setCrashed', payload: { crashed: boolean } }
type AddErrorAction = { type: '@application/addError', payload: { error: string } }

type Action = SetPreloadingAction | SetCrashedAction | AddErrorAction;

export const preload = (): ThunkAction => async (dispatch, getState) => {
    try {
        dispatch(setPreloading(true));
        dispatch(fetchEmojis());
        dispatch(fetchLanguages());
        dispatch(setPreloading(false));
    } catch (error) {
       dispatch(addError({message:error.message, fatal:true}));
    }
}

export const applicationReducer = (state: ApplicationSlice, action: Action): ApplicationSlice => {
    switch (action.type) {
        case SET_PRELOADING:
            return {...state, preloading: action.payload.preloading};
        case SET_CRASHED:
            return {...state, crashed: action.payload.crashed};
        case ADD_ERROR:
            return {...state, errors: [...state.errors, action.payload.error]};
        default:
            return state;
    }
}
