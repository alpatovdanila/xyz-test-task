import {useCustomReducer} from "../model/useCustomReducer";
import {rootReducer, storeContext} from "../model";
import {BrowserRouter as Router} from 'react-router-dom';
<<<<<<< HEAD
import * as React from "react";
import {initialState} from "../model/initialState";

export const Providers = ({children}) => {
    const [state, dispatch] = useCustomReducer(rootReducer, initialState);

    return (
        <storeContext.Provider value={{state, dispatch}}>
            <Router>{children}</Router>
        </storeContext.Provider>
=======
import {ThemeProvider} from 'styled-components';
import {theme} from "../global-styles";
import {GlobalStyle} from "../global-styles";
import {useGithubEndpoint} from "../api/useGithubEndpoint";
import {languagesListEndpoint} from "../api/endpoints/languages";
import {emojisListEndpoint} from "../api/endpoints/emojis";
const directoriesContext = React.createContext();

export const Providers = ({children}) => {
    const languages = useGithubEndpoint(languagesListEndpoint);
    const emojis = useGithubEndpoint(emojisListEndpoint);

    return (
        <directoriesContext.Provider value={{languages, emojis}}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Router>
                    {children}
                </Router>
            </ThemeProvider>
        </directoriesContext.Provider>
>>>>>>> eb96cf7b4b0a94f470be05c3eb085e96db549570
    )
}