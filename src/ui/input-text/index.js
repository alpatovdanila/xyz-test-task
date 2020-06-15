//@flow
import * as React from 'react';
import styled from 'styled-components';

export const InputText: React.ComponentType<{transparent?:boolean}> = styled.input`
    border:1px solid ${props => props.transparent ? 'transparent' : 'gray'};
    padding:${props => props.transparent ? '8px 0' : '8px 8px'};
`;


