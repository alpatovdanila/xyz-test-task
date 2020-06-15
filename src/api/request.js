
import config from './config';

export const request = (method, path, params) => fetch(`${config.baseUrl}${path}`, { method, ...params }).then(r => r.json());

export const get = (path, params) => request('GET', path, params);

export const post = (path, params) => request('POST', path, params);


