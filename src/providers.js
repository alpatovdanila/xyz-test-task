// @flow
import * as React from "react";
import {useThunkableReducer} from "./lib/useThunkableReducer";
import {BrowserRouter as Router} from 'react-router-dom';
import {storeContext, rootReducer, initialState} from "./store/";
import type {RootSlice} from "./store/types/common";

export const Providers = ({children}:{children?:React.Node})  => {
    const [state, dispatch] = useThunkableReducer<RootSlice>(rootReducer, initialState);
    return (
        <storeContext.Provider value={{state, dispatch}}>
            <Router>{children}</Router>
        </storeContext.Provider>
    )
}