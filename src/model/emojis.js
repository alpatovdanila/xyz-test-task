import {getEmojis} from "../api";

const RECEIVE_EMOJIS = '@emojis/receive';

export const receiveEmojis = emojis => ({type:RECEIVE_EMOJIS, payload:{emojis}});
export const fetchEmojis = () => async dispatch => {
    dispatch(receiveEmojis(await getEmojis()))
}

export const emojisReducer = (state, action) => {
    if(action.type === RECEIVE_EMOJIS) return {...state, ...action.payload.emojis};
    return state;
}