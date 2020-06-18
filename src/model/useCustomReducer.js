import * as React from "react";

export const useCustomReducer = (reducer, initialState, initializer) => {
    const [state, oldDispatch] = React.useReducer(reducer, initialState, initializer);
    const prevState = React.useRef(state);

    const newDispatch = (action) => {
        if(typeof action === 'function'){
            action(newDispatch, () => prevState.current);
        }else oldDispatch(action);
    }

    prevState.current = state;

    return [state, newDispatch]
}