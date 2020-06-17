import * as React from 'react';
import styled, {ThemeContext} from 'styled-components';
import {InputText} from '../input-text';
import {Search} from "../icon";
import {Flex, FlexItem} from "../layout";
import {TextLabel} from "../text-label";



export const InputSearch = (props) => {
    const [focused, setFocused] = React.useState(false);
    const inputRef = React.useRef();
    const theme = React.useContext(ThemeContext);

    return <Wrapper onClick={()=>inputRef.current.focus()} focused={focused}>
        <Flex block alignItems={"center"} spacing={8}>
            <FlexItem>
                <Search size={24} fill={theme.colors.gray2}/>
            </FlexItem>
            <FlexItem block>
                <InputText transparent block ref={inputRef} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} {...props}/>
            </FlexItem>
        </Flex>
    </Wrapper>
};

const Wrapper = styled.div`
    padding:8px 16px;
    border:1px solid;
    border-color: ${props => props.focused ? props.theme.colors.gray3 : props.theme.colors.gray4};
    border-radius:8px;
`;

