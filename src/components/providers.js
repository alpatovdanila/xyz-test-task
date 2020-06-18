import {useCustomReducer} from "../model/useCustomReducer";
import {initialState, rootReducer, storeContext} from "../model";
import {BrowserRouter as Router} from 'react-router-dom';
import * as React from "react";

export const Providers = ({children}) => {
    const [state, dispatch] = useCustomReducer(rootReducer, initialState);

    return (
        <storeContext.Provider value={{state, dispatch}}>
            <Router>{children}</Router>
        </storeContext.Provider>
    )
}