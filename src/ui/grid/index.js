//@flow
import styled, {type StyledComponent} from 'styled-components';
import * as React from 'react';

export const Row : StyledComponent<empty, empty, HTMLDivElement>= styled.div`
    display:flex;
    flex-wrap:wrap
`;

export const Col: StyledComponent<{size:number}, empty, HTMLDivElement> = styled.div`
    width:100%;
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
    ${({size})=>size ? `
        max-width: ${(100/12)*size}%;
        flex: 0 0 ${(100/12)*size}%;
    ` : ``}
`