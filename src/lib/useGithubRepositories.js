import * as React from 'react';

export const useRepositories = (query) => {
    const [result, setResult] = React.useState(null);
    const [fetching, setFetching] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [timestamp, setTimestamp] = React.useState(null);
    
    React.useEffect(()=>{
        if(query!==''){
            const abortController = new AbortController();
            setFetching(true);
            fetch(`https://api.githubaaaa.com/search/repositories?q=${encodeURI(query)}`, {signal:abortController.signal})
                .then(r=>r.json())
                .then(data => {
                    setResult(data);
                    setTimestamp(Date.now());
                    setError(null);
                })
                .catch(error => {
                    if(error.name !== 'AbortError') throw error
                })
                .catch(err => setError(err.toString()))
                .finally(()=>setFetching(false));
                
            return ()=>abortController.abort();
        }
    }, [query]);

    return {result, fetching, error, timestamp};
}