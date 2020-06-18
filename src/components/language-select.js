import * as React from 'react';

export const LanguageSelect = ({languages, onLanguageSelect, activeLanguage}) => {
    const handleLanguageSelect = e => onLanguageSelect(languages[e.target.value])

    return (<select onChange={handleLanguageSelect}>
        {Object.values(languages).map( (lang, index) => (
            <option value={index}>{lang.name}</option>
        ))}
    </select>)
}