//@flow
import * as React from 'react';
import styled, {type StyledComponent} from 'styled-components';

export const Empty: StyledComponent<empty, empty, HTMLDivElement> = styled.div`
   min-height:200px;
   display:flex;
   align-items:center;
   justify-content:center;
   color:gray;
`;


