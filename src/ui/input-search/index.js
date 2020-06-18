import * as React from 'react';
import styles from './input-search.module.scss';
import {InputText} from '../input-text';
import {Search} from "../icon";
import {Flex, FlexItem} from "../layout";
import cn from 'class-names';



export const InputSearch = (props) => {
    const [focused, setFocused] = React.useState(false);
    const inputRef = React.useRef();
    console.log(inputRef);
    const classNames = cn(styles.inputSearch, {[styles.focused]:focused});


    return <div className={classNames} onClick={()=>inputRef.current.focus()}>
        <Flex block valignCenter spacing={8}>
            <FlexItem>
                <Search size={24} fill={"currentColor"}/>
            </FlexItem>
            <FlexItem block>
                <InputText  {...props} ref={inputRef} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} transparent block />
            </FlexItem>
        </Flex>
    </div>
};



