import config from './config';
import {SORT_BEST_MATCH, ORDER_ASC} from "../model/search";


export const makeApiRequest = async (method, path, options) => {
    const response = await fetch(`${config.baseUrl}${path}`, {
        method,
        ...options
    })
    return await response.json();
}

export const get = (path, options) => makeApiRequest('GET', path, options);
export const post = (path, options) => makeApiRequest('POST', path, options);



// Repositories search
const repositoriesSearchEndpoint = ({query, sort, order, page}) => {
    return `/search/repositories?q=${query}${sort ? `&sort=${sort}` : ''}${order ? `&sort=${sort}` : ''}${page ? `&page=${page}` : ''}`
}
export const searchRepositories = ({query, sort = SORT_BEST_MATCH, order = ORDER_ASC, page = 1}) => {
    console.log(repositoriesSearchEndpoint({query, sort, order, page}))
    return get(repositoriesSearchEndpoint({query, sort, order, page}));
}

// Emojis directory
export const getEmojis = () => get('/emojis');

// Languages directory
export const getLanguages = () => get('/languages');