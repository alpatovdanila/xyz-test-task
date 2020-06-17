import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
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
    )
}