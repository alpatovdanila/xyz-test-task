import * as React from 'react';
import styles from './input-search.module.scss';
import {InputText} from '../input-text';
import {Search} from "../icon";
import {Flex, FlexItem} from "../layout";
import cn from 'class-names';




export const InputSearch = ({value, onChange}) => {
    const [focused, setFocused] = React.useState(false);
    const inputRef = React.useRef();
    const classNames = cn(styles.inputSearch, {[styles.focused]:focused});

    return <div className={classNames}>
        <Flex block valignCenter spacing={8}>
            <FlexItem>
                <Search size={24} fill={"currentColor"}/>
            </FlexItem>
            <FlexItem block onClick={()=>inputRef.current.focus()}>
                <InputText
                    ref={inputRef}
                    onFocus={()=>setFocused(true)}
                    onBlur={()=>setFocused(false)}
                    onChange={e => onChange(e.target.value)}
                    value={value}
                    transparent
                    block />
            </FlexItem>
        </Flex>
    </div>
};



