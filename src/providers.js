import {useThunkableReducer} from "./lib/useThunkableReducer";
import {BrowserRouter as Router} from 'react-router-dom';
import * as React from "react";
import {storeContext, rootReducer, initialState} from "./store/";

export const Providers = ({children}) => {
    const [state, dispatch] = useThunkableReducer(rootReducer, initialState);
    return (
        <storeContext.Provider value={{state, dispatch}}>
            <Router>{children}</Router>
        </storeContext.Provider>
    )
}