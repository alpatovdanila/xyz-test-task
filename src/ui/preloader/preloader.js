import * as React from "react";
import styled from 'styled-components';
import {Logo} from "../logo";
import {FlexCol, FlexItem} from "../layout";
import {Jello} from "../jello";

const Wrapper = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
    color:${props => props.theme.colors.text}
`;

export const Preloader = ({children}) => <Wrapper>
    <FlexCol spacing={32} alignItems={"center"}>
        <FlexItem><Jello infinite><Logo/></Jello></FlexItem>
        <FlexItem>{children}</FlexItem>
    </FlexCol>
</Wrapper>