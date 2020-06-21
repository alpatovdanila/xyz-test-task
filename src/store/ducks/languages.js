// @flow
import {getLanguages} from "../../api/languages";
import {addError} from "./application";
import type {ThunkAction} from "../types";
import type {LanguagesSlice} from "../types/common";

const RECEIVE_LANGUAGES = '@languages/receive';

type ReceiveLanguagesAction = {type:'@languages/receive', payload:{languages:LanguagesSlice}}

type Action = ReceiveLanguagesAction;

export const receiveLanguages = (languages:LanguagesSlice) => ({type:RECEIVE_LANGUAGES, payload:{languages}});

export const fetchLanguages = (): ThunkAction => async dispatch => {
    try{
        const languages  = await getLanguages();
        dispatch(receiveLanguages(Object.values(languages)))
    }catch(e){
        dispatch(addError({message:e.message, fatal:true}))
    }
}

export const languagesReducer = (state:Object[], action:Action) : Object[] => {
    if(action.type === RECEIVE_LANGUAGES) return action.payload.languages;
    return state;
}