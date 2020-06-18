import {fetchEmojis, receiveEmojis} from "./emojis";
import {fetchLanguages, receiveLanguages} from "./languages";
import {getEmojis, getLanguages} from "../api";

const SET_PRELOADING = '@application/setPreloading';
const SET_CRASHED = '@application/setCrashed';
const ADD_ERROR = '@application/addError';

export const setPreloading = preloading => ({type: SET_PRELOADING, payload: {preloading}});
export const setCrashed = crashed => ({type: SET_CRASHED, payload: {crashed}});
export const addError = (error) => ({type:ADD_ERROR, payload:{error}});

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
