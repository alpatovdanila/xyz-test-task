import {get} from "./request";

export const searchRepositories = ({query, sort, order, page, perPage, lang}) => {
    return get(`/search/repositories`, {
        q: lang ? `${query}+language:${lang}` : query,
        sort, order, page, perPage
    });
}