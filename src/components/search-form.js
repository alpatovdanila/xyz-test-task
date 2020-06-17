//@flow
import * as React from 'react';
import {InputSearch} from '../ui/input-search';
import {useDeferredValue} from '../lib/useDeferredValue';
import {useSearchUrl} from "../routing/useSearchUrl";

type Props = {
    initialQuery?: string,
    onSubmit: (value:string) => void,
    submitTimeout?: number;
}

export const SearchForm = ({submitTimeout = 250} : Props) => {
    const {query, setQuery} = useSearchUrl();

    const [value, setValue] = React.useState(query);
    const deferredValue = useDeferredValue<string>(value, submitTimeout);
    const [submitted, setSubmitted] = React.useState(false);

    const onInputChange = (e : Event) => {
        setValue(e.target.value);
        setSubmitted(false);
    }
    
    const handleKeyDown = e => {
        if(e.key === 'Enter' && !submitted) setQuery(value);
    }

    React.useEffect(()=>{
        if(!submitted) setQuery(deferredValue);
    }, [deferredValue])

    React.useEffect(()=>{
        setValue(query);
    }, [query])
    
    return <>
        {JSON.stringify(query)}
        <InputSearch value={value} onChange={onInputChange} placeholder={"Repository name or author"} onKeyDown={handleKeyDown} block/>
    </>
    
}
