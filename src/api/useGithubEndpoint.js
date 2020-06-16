//@flow
import config from './config';
import * as React from 'react';

export type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

export type Request = {
    method: Method,
    path: string,
    options?:{...}
}

export const makeRequest = <T>(request: Request): Promise<T> => {
    const {method, path, options = {}} = request;
    return fetch(`${config.baseUrl}${path}`, {method}).then(r => r.json());
};

type EndpointResponse<T> = {
    fetching:boolean,
    error:null | Error,
    data: null | T,
    timestamp: number,
}

export const useGithubEndpoint = <T>(endpointPath: string): EndpointResponse<T> => {
    
    const [fetching, setFetching] = React.useState<boolean>(true);
    const [error, setError] = React.useState<Error | null>(null);
    const [data, setData] = React.useState<T | null>(null);
    const [timestamp, setTimestamp] = React.useState(Date.now());
    
    const get = React.useCallback(() => {
        setFetching(true);
        makeRequest<T>({method: 'GET', path: endpointPath})
            .then(data => {
                setData(data);
                setTimestamp(Date.now());
            })
            .catch(setError)
            .finally(() => setFetching(false));
    }, [endpointPath]);


    const post = (body) => {
        throw new Error('Method not implemented')
    };

    React.useEffect(get, [endpointPath]);

    return {
        fetching,
        error,
        timestamp,
        data,
        get,
        post
    }
}