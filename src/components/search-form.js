//@flow
import * as React from 'react';
import {InputSearch} from '../ui/input-search';
import {useDeferredValue} from '../lib/useDeferredValue';

type Props = {
    initialQuery?: string,
    onSubmit: (value:string) => void,
    submitTimeout?: number;
}

export const SearchForm = ({initialQuery = '', onSubmit, submitTimeout = 250} : Props) => {
    
    const [value, setValue] = React.useState(initialQuery);
    const deferredValue = useDeferredValue<string>(value, submitTimeout);
    const [submitted, setSubmitted] = React.useState(false);

    const onInputChange = (e : Event) => {
        setValue(e.target.value);
        setSubmitted(false);
    }
    
    const handleKeyDown = e => {
        if(e.key === 'Enter' && !submitted) onSubmit(value);
    }

    React.useEffect(()=>{
        if(deferredValue !== initialQuery && !!deferredValue.trim().length && !submitted) onSubmit(deferredValue);
    }, [deferredValue])
    
    return <InputSearch value={value} onChange={onInputChange} placeholder={"Start searching"} onKeyDown={handleKeyDown} block/>
    
}
