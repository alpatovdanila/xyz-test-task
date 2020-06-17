//@flow
import * as React from 'react';
import styled, {type StyledComponent} from 'styled-components';

export const Error: StyledComponent<empty, empty, HTMLDivElement> = styled.div`
   padding:8px 16px;
   display:block;
   border-radius:8px;
   border:2px solid ${props => props.theme.colors.statusDanger};
   font-weight:bold;
   color:${props => props.theme.colors.statusDanger}
`;


