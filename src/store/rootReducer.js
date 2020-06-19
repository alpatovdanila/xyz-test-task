import * as React from 'react';
import {applicationReducer} from "../features/common/ducks/application";
import {emojisReducer} from "../features/common/ducks/emojis";
import {languagesReducer} from "../features/common/ducks/languages";
import {searchReducer} from "../features/search/ducks/search";
import {initialState} from "./initialState";

export const rootReducer = (state = initialState, action) => ({
    search: searchReducer(state.search, action),
    application: applicationReducer(state.application, action),
    emojis: emojisReducer(state.emojis, action),
    languages: languagesReducer(state.languages, action),
})


