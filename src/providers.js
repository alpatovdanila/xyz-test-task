import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from "./global-styles";

export const Providers = ({children}) => (
    <ThemeProvider theme={theme}>
        <Router>
            {children}
        </Router>
    </ThemeProvider>
)