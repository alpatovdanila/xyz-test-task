// @flow
import * as React from "react";
import type {Action, ThunkAction} from "../store/types";


export const useThunkableReducer = <T> (reducer:()=>T, initialState: T, initializer?: ()=>T) => {
    const [state, oldDispatch] = React.useReducer(reducer, initialState, initializer);
    const prevState = React.useRef(state);

    const newDispatch = (action: Action | ThunkAction) => {
        if(typeof action === 'function'){
            action(newDispatch, () => prevState.current);
        }else oldDispatch(action);
    }

    prevState.current = state;
    return [state, newDispatch]
}