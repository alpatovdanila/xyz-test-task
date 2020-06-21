// @flow
import {getEmojis} from "../../api/emojis";
import type {ThunkAction} from "../types";
import type {EmojisSlice} from "../types/common";
import {addError} from "./application";

const RECEIVE_EMOJIS = '@emojis/receive';
type ReceiveEmojisAction = { type: '@emojis/receive', payload: { emojis: EmojisSlice } }

type Action = ReceiveEmojisAction;

export const receiveEmojis = (emojis: EmojisSlice) => ({type: RECEIVE_EMOJIS, payload: {emojis}});

export const fetchEmojis = (): ThunkAction => async dispatch => {
    try{
        dispatch(receiveEmojis(await getEmojis()))
    }catch(e){
        dispatch(addError({message:e.message, fatal:true}))
    }
}

export const emojisReducer = (state: EmojisSlice = {}, action: Action): EmojisSlice => {
    if (action.type === RECEIVE_EMOJIS) return {...state, ...action.payload.emojis};
    return state;
};