import config from './config';
import {createParamsUrl} from "../lib/urlSearchParams";



export const makeApiRequest = async (method, path, options = {headers:{}}) => {
    const response = await fetch(`${config.baseUrl}${path}`, {
        method,
        headers: {
            'Authorization': `Basic ${btoa(`${config.username}:${config.token}`)}`,
            ...options.headers
        },
    });

    if (response.status >= 200 && response.status <= 299) {
        return await response.json();
    } else {
        const error = await response.json();
        throw Error(error.message);
    }
}

export const get = (path, params) => makeApiRequest('GET', `${path}${params ? `?${createParamsUrl(params)}` : ''}`);

export const post = (path, options) => makeApiRequest('POST', path, options);


