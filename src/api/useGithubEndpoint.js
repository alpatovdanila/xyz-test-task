//@flow
import config from './config';
import * as React from 'react';

export type RateLimit = {
    remaining:number,
    limit:number,
    reset:number,
}

export type EndpointResponse<T> = {
    fetching:boolean,
    error:null | Error,
    data: null | T,
    timestamp: number,
    rateLimit: null | RateLimit
}

const getRateLimits = response => {
    const headers = response.headers;
    const remaining = +headers.get('X-RateLimit-Remaining');
    const limit = +headers.get('X-RateLimit-Limit');
    const reset = +headers.get('X-RateLimit-Reset');
    return{
        remaining: isNaN(remaining) ? null : remaining,
        limit: isNaN(limit) ? null : limit,
        reset: isNaN(reset) ? null : reset,
    };
}

export const useGithubEndpoint = <T>(endpointPath: string): EndpointResponse<T> => {
    
    const [fetching, setFetching] = React.useState<boolean>(true);
    const [error, setError] = React.useState<Error | null>(null);
    const [data, setData] = React.useState<T | null>(null);
    const [timestamp, setTimestamp] = React.useState(Date.now());
    const [rateLimit, setRateLimit] = React.useState(null);

    const isConsumable = !!data && !fetching;

    const get = React.useCallback(() => {
        setFetching(true);
        fetch<T>(`${config.baseUrl}${endpointPath}`, {method: 'GET'})
            .then(response => {
                setRateLimit(getRateLimits(response));
                return response.json();
            })
            .then(data => {
                setData(data);
                setTimestamp(Date.now());
            })
            .catch(error => setError(error.message))
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
        rateLimit,
        post,
        isConsumable,
    }
}