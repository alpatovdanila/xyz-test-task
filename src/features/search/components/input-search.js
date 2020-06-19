import * as React from 'react';
import styles from './input-search.module.scss';
import {InputText} from '../../../ui/input-text';
import {Search} from "../../../ui/icon";
import {Flex, FlexItem} from "../../../ui/layout";
import cn from 'class-names';
import {LanguageSelect} from "./language-select";


export const InputSearch = ({value, onChange, languages, onLanguageSelect, activeLanguage, ...props}) => {
    const [focused, setFocused] = React.useState(false);
    const inputRef = React.useRef();
    const classNames = cn(styles.inputSearch, {[styles.focused]: focused});

    return <div className={classNames}>
        <Flex block valignCenter spacing={8}>
            <FlexItem>
                <Search size={24} fill={"currentColor"}/>
            </FlexItem>
            <FlexItem block onClick={() => inputRef.current.focus()}>
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



