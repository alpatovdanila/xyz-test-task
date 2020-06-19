// @flow
import {fetchEmojis} from "./emojis";
import {fetchLanguages} from "./languages";


const SET_PRELOADING = '@application/setPreloading';
const SET_CRASHED = '@application/setCrashed';
const ADD_ERROR: boolean = '@application/addError';

export const setPreloading = (preloading :boolean)=> ({type: SET_PRELOADING, payload: {preloading}});
export const setCrashed = (crashed:boolean) => ({type: SET_CRASHED, payload: {crashed}});
export const addError = (error:number) => ({type:ADD_ERROR, payload:{error}});

export const preload = () => async (dispatch, getState) => {
    try {
        dispatch(setPreloading(true));
        dispatch(fetchEmojis());
        dispatch(fetchLanguages());
        dispatch(setPreloading(false));
    } catch (error) {
        dispatch(addError(error.message));
        dispatch(setCrashed(true));
        dispatch(setPreloading(false));
    }
}

export const applicationReducer = (state, action) => {
    switch (action.type) {
        case SET_PRELOADING:
            return {...state, preloading: action.payload.preloading}
        case SET_CRASHED:
            return {...state, crashed: action.payload.crashed}
        case ADD_ERROR:
            return {...state, errors:[...state.errors, action.payload.error]}
        default:
            return state;
    }
}
