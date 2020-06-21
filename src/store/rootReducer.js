////flow todo: find a way to type-safe combine reducers (move to actual redux and combineReducers?)
import * as React from 'react';
import {applicationReducer} from "./ducks/application";
import {emojisReducer} from "./ducks/emojis";
import {languagesReducer} from "./ducks/languages";
import {searchReducer} from "./ducks/search";
import {initialState} from "./initialState";
import type {RootSlice} from "./types/common";
import type {Action} from "./types";

export const rootReducer = (state:RootSlice = initialState, action: Action) : RootSlice => ({
    search: searchReducer(state.search, action),
    application: applicationReducer(state.application, action),
    emojis: emojisReducer(state.emojis, action),
    languages: languagesReducer(state.languages, action),
});