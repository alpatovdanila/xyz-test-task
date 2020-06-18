import * as React from 'react';
import {Select} from "../../ui/select";

export const LanguageSelect = React.memo(({languages, onLanguageSelect, activeLanguage}) => {

    const handleLanguageSelect = e => {
        if(e.target.value) onLanguageSelect(e.target.value);
        if(!e.target.value) onLanguageSelect(null);
    };

    return (<Select onChange={handleLanguageSelect} transparent  value={activeLanguage}>
        <option value={""}>Any programming language</option>
        {Object.values(languages).map( (lang, index) => (
            <option value={lang.aliases[0]}>{lang.name}</option>
        ))}
    </Select>)
}, );