// @flow
import * as React from 'react';
import {InputSearch} from './input-search';
import type {LanguagesSlice} from "../../store/types/common";

type Props = {
    languages: LanguagesSlice,
    query: string,
    activeLanguage: ?string,
    onSubmit: ({ query: string, language: ?string }) => void,
    submitTimeout: number
}

export const SearchForm = ({languages, activeLanguage, query, onSubmit, submitTimeout = 250}: Props) => {
    const [value, setValue] = React.useState(query);
    const [language, setLanguage] = React.useState(activeLanguage);
    const [changed, setChanged] = React.useState(false);



    React.useEffect(()=>setChanged(true), [value, language]);

    // Debounced Auto-submit
    React.useEffect(() => {
        const timer = setTimeout(()=>{
            if (value && value.trim() && changed){
                onSubmit({query: value, language: language});
                setChanged(false);
            }
        } , submitTimeout);
        return () => clearTimeout(timer);
    }, [value, language, submitTimeout, changed]);

    return <InputSearch
        languages={languages}
        activeLanguage={language}
        onLanguageSelect={setLanguage}
        value={value}
        onChange={setValue}
        placeholder={"Repository name or author"}
        block
    />

}
