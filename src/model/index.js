import * as React from 'react';
import {applicationReducer} from "./application";
import {emojisReducer} from "./emojis";
import {languagesReducer} from "./languages";
import {searchReducer} from "./search";

export const initialState = {
    application: {preloading: false, crashed: false, errors: []},
    emojis: {},
    languages: {},
    search: {
        query: 'react',
        page: null,
        sort: null,
        order: null,
        fetching: false,
        results:{}

    }
}

export const rootReducer = (state = initialState, action) => ({
    search: searchReducer(state.search, action),
    application: applicationReducer(state.application, action),
    emojis: emojisReducer(state.emojis, action),
    languages: languagesReducer(state.languages, action),

})


export const storeContext = React.createContext();