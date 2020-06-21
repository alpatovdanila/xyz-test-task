// @flow
import {addError} from "./application";
import {emojify} from "../../lib/emojify";
import {initialState} from "../initialState";
import {searchRepositories} from "../../api/repositories";
import type {SearchResults, SearchSlice} from "../types/search";
import type {EmojisSlice} from "../types/common";
import type {ThunkAction} from "../types";

export const ORDER_DESC = 'desc';
export const ORDER_ASC = 'asc';
export const SORT_STARS = 'stars';
export const SORT_FORKS = 'forks';
export const SORT_UPDATED = 'updated';
export const SORT_BEST_MATCH = 'best-match';
export const SORT_HELP_WANTED_ISSUES = 'help-wanted-issues';
export const SET_QUERY = '@search/setQuery';
export const SET_LANG = '@search/setLang';
export const SET_PAGE = '@search/setPage';
export const SET_ORDER = '@search/setOrder';
export const SET_SORT = '@search/setSort';
export const SET_FETCHING = '@search/setFetching';
export const RECEIVE_RESULTS = '@search/receiveResults';
export const CLEAR_RESULTS = '@search/clearResults';


type SetQueryAction = { type: '@search/setQuery', payload: { query: string } }
type SetLangAction = { type: '@search/setLang', payload: { lang: string } }
type SetPageAction = { type: '@search/setPage', payload: { page: string } }
type SetOrderAction = { type: '@search/setOrder', payload: { order: string } }
type SetSortAction = { type: '@search/setSort', payload: { sort: string } }
type SetFetchingAction = { type: '@search/setFetching', payload: { fetching: boolean } }
type ReceiveResultsAction = { type: '@search/receiveResults', payload: { results: SearchResults, emojis: EmojisSlice } };
type ClearResultsAction = { type: '@search/clearResults' }

type Action =
    SetQueryAction
    | SetLangAction
    | SetPageAction
    | SetOrderAction
    | SetSortAction
    | SetFetchingAction
    | ReceiveResultsAction
    | ClearResultsAction

export const setQuery = (query: ?string) => ({type: SET_QUERY, payload: {query}});
export const setLang = (lang: ?string) => ({type: SET_LANG, payload: {lang}});
export const setPage = (page: ?string) => ({type: SET_PAGE, payload: {page}});
export const setOrder = (order: ?string) => ({type: SET_ORDER, payload: {order}});
export const setSort = (sort: ?string) => ({type: SET_SORT, payload: {sort}});
export const setFetching = (fetching: boolean) => ({type: SET_FETCHING, payload: {fetching}});
export const clearResults = () => ({type: CLEAR_RESULTS});

export const receiveResults = (results: SearchResults): ThunkAction => async (dispatch, getState) => {
    dispatch(({type: RECEIVE_RESULTS, payload: {results, emojis: getState().emojis}}))
};

export const invalidate = (): ThunkAction => async (dispatch, getState) => {
    setFetching(true);
    try {
        const {query, order, sort, page, perPage, lang} = getState().search;
        dispatch(setFetching(true));
        dispatch(receiveResults(await searchRepositories({query, order, sort, page, perPage, lang})));
        dispatch(setFetching(false));
    } catch (error) {
        dispatch(setFetching(false));
        dispatch(addError(error.message));
    }
}

export const searchReducer = (state: SearchSlice, action: Action): SearchSlice => {
    switch (action.type) {
        case SET_QUERY:
            return {...state, query: action.payload.query};
        case SET_LANG:
            return {...state, lang: action.payload.lang};
        case SET_PAGE:
            return {...state, page: action.payload.page};
        case SET_ORDER:
            return {...state, order: action.payload.order};
        case SET_SORT:
            return {...state, sort: action.payload.sort};
        case SET_FETCHING:
            return {...state, fetching: action.payload.fetching};
        case RECEIVE_RESULTS: {
            const results = {
                ...action.payload.results, items: action.payload.results.items.map(item => {
                    return {...item, description: emojify(item.description, action.payload.emojis)}
                })
            }
            return {...state, results}
        }
        case CLEAR_RESULTS:
            return {...state, results: initialState.search.results};
        default:
            return state;
    }
};

export const getTotalPages = (state: SearchSlice): number => {
    if (!state.results || !state.results.total_count) return 0;

    const totalResults = state.results.total_count ? Math.min(state.results.total_count, 1000) : 0;// Github's limitation is 1000 search results max

    const totalPages = Math.ceil(totalResults / state.perPage);

    return totalPages;
}