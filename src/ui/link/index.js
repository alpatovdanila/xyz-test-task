//@flow
import * as React from 'react';
import styled, {type StyledComponent} from 'styled-components';

export const Link: StyledComponent<{}, {}, HTMLAnchorElement> = styled.a`
    cursor:pointer;
    color:blue;
    text-decoration:underline;
`;