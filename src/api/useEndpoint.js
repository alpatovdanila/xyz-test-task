import * as React from 'react';
import {request} from './request';

export const useEndpoint = (endpointPath) => {
    const [fetching, setFetching] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState({});
    const [timestamp, setTimestamp] = React.useState(null);
    
    const GET = React.useCallback((body) => {
        setFetching(true);
        request('GET', endpointPath)
            .then(data => {
                setData(data);
                setTimestamp(Date.now());
            })
            .catch(setError)
            .finally(()=>setFetching(false));
    }, [endpointPath]);

    const PATCH = () => {throw new Error('Method not implemented')}
    const PUT = () => {throw new Error('Method not implemented')}
    const POST = () => {throw new Error('Method not implemented')}
    const DELETE = () => {throw new Error('Method not implemented')}

    React.useEffect(GET, [endpointPath])

    return {
        fetching, error, timestamp, data, GET, PATCH, PUT, POST, DELETE
    }
}