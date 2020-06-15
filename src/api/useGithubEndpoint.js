//@flow;
import config from './config';
import * as React from 'react';

export type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

export type Request = {
    method: Method,
    path: string,
}

export const makeRequest = (request: Request): Promise => {
    const {method, path} = request;
    return fetch(`${config.baseUrl}${path}`, {method}).then(r => r.json());
};

type Endpoint<T> = {
    fetching:boolean,
    error?:Error,
    data:T,
    timestamp:number,
}

export const useGithubEndpoint = (endpointPath): Endpoint => {
    const [fetching, setFetching] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState({});
    const [timestamp, setTimestamp] = React.useState(null);

    const get = React.useCallback(() => {
        setFetching(true);
        makeRequest({method: 'GET', path: endpointPath})
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

    React.useEffect(get, [endpointPath.path]);

    return {
        fetching,
        error,
        timestamp,
        data,
        get,
        post
    }
}