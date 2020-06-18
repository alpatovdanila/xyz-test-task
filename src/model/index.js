import * as React from 'react';
import {applicationReducer} from "./application";
import {emojisReducer} from "./emojis";
import {languagesReducer} from "./languages";
import {searchReducer} from "./search";
import {initialState} from "./initialState";

export const rootReducer = (state = initialState, action) => ({
    search: searchReducer(state.search, action),
    application: applicationReducer(state.application, action),
    emojis: emojisReducer(state.emojis, action),
    languages: languagesReducer(state.languages, action),
})


export const storeContext = React.createContext();