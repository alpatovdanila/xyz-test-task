// @flow
import * as React from 'react';
import styled, {type StyledComponent} from 'styled-components';

//todo: find better way to flow-type props inside styled components' backticks

type Props = {transparent?:boolean, block?:boolean, ...}

export const InputText: StyledComponent<Props, empty, HTMLInputElement> = styled.input`
    border:1px solid ${(props: Props) => props.transparent ? 'transparent' : 'gray'};
    background-color:${(props: Props) => props.transparent ? 'transparent' : 'white'};
    padding:${(props: Props) => props.transparent ? '8px 0' : '8px 8px'};
    width:${(props: Props) => props.block ? '100%' : 'auto'};
`;




