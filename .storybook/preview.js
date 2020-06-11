import {addDecorator} from '@storybook/react';
import React from 'react';
import {theme, GlobalStyle} from '../src/global-styles';
import {ThemeProvider} from "styled-components";

addDecorator(story => <><ThemeProvider theme={theme}><GlobalStyle/>{story()}</ThemeProvider></>);