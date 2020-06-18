import {searchRepositories} from "../api";
import {addError} from "./application";

export const ORDER_DESC = 'desc';
export const ORDER_ASC = 'asc';
export const SORT_STARS = 'stars';
export const SORT_FORKS = 'forks';
export const SORT_UPDATED = 'updated';
export const SORT_BEST_MATCH = 'best-match';
export const SORT_HELP_WANTED_ISSUES = 'help-wanted-issues';

const SET_QUERY = '@search/setQuery';
const SET_PAGE = '@search/setPage';
const SET_ORDER = '@search/setOrder';
const SET_SORT = '@search/setSort';
const SET_FETCHING = '@search/setFetching';
const RECEIVE_RESULTS = '@search/receiveResults';

export const setQuery = query => ({type:SET_QUERY, payload:{query}});
export const setPage = page => ({type:SET_PAGE, payload:{page}});
export const setOrder = order=> ({type:SET_ORDER, payload:{order}});
export const setSort = sort => ({type:SET_SORT, payload:{sort}});
export const setFetching = fetching => ({type:SET_FETCHING, payload:{fetching}});
export const receiveResults = results => ({type:RECEIVE_RESULTS, payload:{results}});

export const invalidate = () => async (dispatch, getState) => {
    setFetching(true);
    try{
        const {query, order, sort, page} = getState().search;
        dispatch(setFetching(true))
        dispatch(receiveResults(await searchRepositories({query, order, sort, page})));
        dispatch(setFetching(false));
    }catch(error){
        dispatch(setFetching(false));
        dispatch(addError(error.message));
    }
}

export const searchReducer = (state, action) => {
    switch (action.type) {
        case SET_QUERY: return {...state, query:action.payload.query}
        case SET_PAGE: return {...state, page:action.payload.page}
        case SET_ORDER: return {...state, order:action.payload.order}
        case SET_SORT: return {...state, sort:action.payload.sort}
        case SET_FETCHING: return {...state, fetching:action.payload.fetching}
        case RECEIVE_RESULTS: return {...state, results:action.payload.results}
        default: return state;
    }
}