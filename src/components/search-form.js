import * as React from 'react';
import {InputSearch} from '../ui/input-search';
import {useDeferredValue} from '../lib/useDeferredValue';

export const SearchForm = ({query, onQueryChange, submitTimeout = 250}) => {
    const [value, setValue] = React.useState(query);

    const deferredValue = useDeferredValue(value, submitTimeout);

    const submit = () => {
        if(deferredValue && deferredValue.trim()) onQueryChange(deferredValue);
    }

    React.useEffect(submit, [deferredValue]);

    return <>
        <InputSearch
            value={value}
            onChange={setValue}
            placeholder={"Repository name or author"}
            block
        />
    </>

}
