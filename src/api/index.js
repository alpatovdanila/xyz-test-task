import config from './config';
import {SORT_BEST_MATCH, ORDER_ASC} from "../model/search";


export const makeApiRequest = async (method, path, options) => {
    const response = await fetch(`${config.baseUrl}${path}`, {
        method,
        headers: {'Authorization': `Basic ${btoa(`${config.username}:${config.token}`)}`},
        ...options

    })
    return await response.json();
}

export const get = (path, options) => makeApiRequest('GET', path, options);
export const post = (path, options) => makeApiRequest('POST', path, options);


// Repositories search
export const searchRepositories = ({query, sort = SORT_BEST_MATCH, order = ORDER_ASC, page = 1, perPage = 10, lang = null}) => {

    let url = `/search/repositories?q=${query}`;
    if(lang) url+=`+language:${lang}`;
    if(sort) url+=`&sort=${sort}`;
    if(order) url+=`&order=${order}`;
    if(page) url+=`&page=${page}`;
    if(perPage) url+=`&per_page=${perPage}`

    return get(url);
}

// Emojis directory
export const getEmojis = () => get('/emojis');

// Languages directory
export const getLanguages = () => get('/languages');