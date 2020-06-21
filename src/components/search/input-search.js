// @flow
import * as React from 'react';
import styles from './input-search.module.scss';
import {InputText} from '../../ui/input-text';
import {Search} from "../../ui/icon";
import {Flex, FlexItem} from "../../ui/layout";
import cn from 'classnames';
import {LanguageSelect} from "./language-select";
import type {LanguagesSlice} from "../../store/types/common";

type Props = {
    value:string,
    onChange:(string) => void,
    languages:LanguagesSlice,
    onLanguageSelect: (language:?string) => void,
    activeLanguage: ?string,
    ...
}

export const InputSearch = ({value, onChange, languages, onLanguageSelect, activeLanguage, ...props} : Props) => {
    const [focused, setFocused] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement|null>(null);
    const classNames = cn(styles.inputSearch, {[styles.focused]: focused});

    return <div className={classNames}>
        <Flex block valignCenter spacing={8}>
            <FlexItem>
                <Search size={24} fill={"currentColor"}/>
            </FlexItem>
            <FlexItem block onClick={() => inputRef.current && inputRef.current.focus()}>
                <InputText
                    {...props}
                    ref={inputRef}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={e => onChange(e.target.value)}
                    value={value}
                    transparent
                    block
                    />
            </FlexItem>
            <FlexItem>
                <LanguageSelect
                    languages={languages}
                    onLanguageSelect={onLanguageSelect}
                    activeLanguage={activeLanguage}/>
            </FlexItem>
        </Flex>
    </div>
};



