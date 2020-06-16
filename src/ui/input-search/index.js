import * as React from 'react';
import styled, {ThemeContext} from 'styled-components';
import {InputText} from '../input-text';
import {Search} from "../icon";


export const InputSearch = (props) => {
    const theme = React.useContext(ThemeContext);
    console.log(theme);
    return <Wrapper>
        <IconWrapper><Search fill={theme.colors.gray1}/></IconWrapper>
        <InputText {...props} transparent block/>
    </Wrapper>
};

const Wrapper = styled.div`
    align-items:center;
    padding:8px 16px;
    display:flex;
    border:1px solid gray;
    border-radius:999px;
`;

const IconWrapper = styled.div`
    margin-right:8px;
    align-items:center;
    display:flex;
`