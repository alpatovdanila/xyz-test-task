import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from "../global-styles";
import {GlobalStyle} from "../global-styles";

export const Providers = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Router>
                {children}
            </Router>
        </ThemeProvider>
    )
}