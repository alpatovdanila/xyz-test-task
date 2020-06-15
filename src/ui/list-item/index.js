//@flow
import * as React from 'react';
import styled from 'styled-components';

export const ListItem: React.ComponentType = styled.div`
    padding:8px 16px;
    cursor:pointer;
    &:hover{
        background:${props => props.theme.colors.primary}; 
        color:white;
    }
`;


