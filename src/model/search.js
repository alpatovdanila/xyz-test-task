import {searchRepositories} from "../api";
import {addError} from "./application";
import {emojify} from "../lib/emojify";
import {initialState} from "./initialState";

export const ORDER_DESC = 'desc';
export const ORDER_ASC = 'asc';
export const SORT_STARS = 'stars';
export const SORT_FORKS = 'forks';
export const SORT_UPDATED = 'updated';
export const SORT_BEST_MATCH = 'best-match';
export const SORT_HELP_WANTED_ISSUES = 'help-wanted-issues';

const SET_QUERY = '@search/setQuery';
const SET_LANG = '@search/setLang';
const SET_PAGE = '@search/setPage';
const SET_ORDER = '@search/setOrder';
const SET_SORT = '@search/setSort';
const SET_FETCHING = '@search/setFetching';
const RECEIVE_RESULTS = '@search/receiveResults';
const CLEAR_RESULTS = '@search/clearResults';

export const setQuery = query => ({type: SET_QUERY, payload: {query}});
export const setLang = lang => ({type: SET_LANG, payload: {lang}});
export const setPage = page => ({type: SET_PAGE, payload: {page}});
export const setOrder = order => ({type: SET_ORDER, payload: {order}});
export const setSort = sort => ({type: SET_SORT, payload: {sort}});
export const setFetching = fetching => ({type: SET_FETCHING, payload: {fetching}});
export const clearResults = fetching => ({type: CLEAR_RESULTS});
export const receiveResults = results => async (dispatch, getState) => {
    dispatch(({type: RECEIVE_RESULTS, payload: {results, emojis: getState().emojis}}))
}

export const invalidate = () => async (dispatch, getState) => {
    setFetching(true);
    try {
        const {query, order, sort, page, perPage, lang} = getState().search;
        dispatch(setFetching(true))
        dispatch(receiveResults(await searchRepositories({query, order, sort, page, perPage, lang})));
        dispatch(setFetching(false));
    } catch (error) {
        dispatch(setFetching(false));
        dispatch(addError(error.message));
    }
}

export const searchReducer = (state, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {...state, query: action.payload.query}
        case SET_LANG:
            return {...state, lang: action.payload.lang}
        case SET_PAGE:
            return {...state, page: action.payload.page}
        case SET_ORDER:
            return {...state, order: action.payload.order}
        case SET_SORT:
            return {...state, sort: action.payload.sort}
        case SET_FETCHING:
            return {...state, fetching: action.payload.fetching}
        case RECEIVE_RESULTS: {
            const results = {
                ...action.payload.results, items: action.payload.results.items.map(item => {
                    return {...item, description: emojify(item.description, action.payload.emojis)}
                })
            }
            return {...state, results}
        }
        case CLEAR_RESULTS:
            return {...state, results: initialState.search.results}
        default:
            return state;
    }
}