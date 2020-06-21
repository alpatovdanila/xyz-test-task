// @flow
import * as React from 'react';
import {Select} from "../../ui/select";
import type {LanguagesSlice} from "../../store/types/common";

type Props = {
    languages:LanguagesSlice,
    onLanguageSelect:(language:?string)=>void,
    activeLanguage:?string,
}


export const LanguageSelect = React.memo<Props>(({languages, onLanguageSelect, activeLanguage} : Props) => {

    const handleLanguageSelect = e => {
        if(e.target.value) onLanguageSelect(e.target.value);
        if(!e.target.value) onLanguageSelect(null);
    };

    return (<Select onChange={handleLanguageSelect} transparent value={activeLanguage ? activeLanguage : ''}>
        <option value={""}>Any programming language</option>
        {languages.map( (lang, index) => (
            <option key={lang.name} value={lang.aliases[0]}>{lang.name}</option>
        ))}
    </Select>)
});