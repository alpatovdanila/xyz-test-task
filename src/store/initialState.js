import {ORDER_DESC, SORT_BEST_MATCH} from "./ducks/search";

export const initialState = {
    application: {
        preloading: true,
        crashed: false,
        errors: []
    },
    search: {
        query: null,
        page: null,
        sort: null,
        order: null,
        fetching: false,
        results: {},
        perPage: 30,
        lang: null,
    },
    emojis: {},
    languages: [],
}