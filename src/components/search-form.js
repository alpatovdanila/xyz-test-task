import * as React from 'react';
import {InputSearch} from './input-search';
import {useDeferredValue} from '../lib/useDeferredValue';

export const SearchForm = ({languages, activeLanguage, query, onSubmit, submitTimeout = 250}) => {
    const [value, setValue] = React.useState(query);
    const [language, setLanguage] = React.useState(activeLanguage);
    const deferredValue = useDeferredValue(value, submitTimeout);
    const [changed, setChanged] = React.useState(false);

    const submittable = changed && deferredValue && deferredValue.trim();

    const submit = () => {
        if(submittable){onSubmit({query:deferredValue, lang:language})}
    };

    const onInputSearchChange = (value) => {
        setValue(value);
        setChanged(true); // Only allow auto-sumbit when user started interacting with input
    }

    React.useEffect(submit, [deferredValue, language]);

    return <>
        <InputSearch
            languages={languages}
            activeLanguage={language}
            onLanguageSelect={setLanguage}
            value={value}
            onChange={onInputSearchChange}
            placeholder={"Repository name or author"}
            block
        />
    </>

}
