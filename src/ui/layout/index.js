//@flow
import styled, {type StyledComponent} from 'styled-components';
import * as React from 'react';

export const Row: StyledComponent<empty, empty, HTMLDivElement> = styled.div`
    display:flex;
    flex-wrap:wrap
`;

export const Col: StyledComponent<{ size: number }, empty, HTMLDivElement> = styled.div`
    width:100%;
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
    ${({size}) => size ? `
        max-width: ${(100 / 12) * size}%;
        flex: 0 0 ${(100 / 12) * size}%;
    ` : ``}
`

export const Balancer = styled.div`
   display:${props => props.block ? `flex` : `inline-flex`};
   ${props => props.x ? `justify-content:center;` : ``}
   ${props => props.y ? `align-items:center;` : ``}
`

export const FlexItem = styled.div`
    ${props => props.block ? 'width:100%' : ''}
`

export const Flex = styled.div`
   display:${props => props.block ? 'flex' : 'inline-flex'};
   align-items:${props => props.alignItems ? props.alignItems : 'flex-start'};
   justify-content:${props => props.justifyContent ? props.justifyContent : 'start'};
   & > ${FlexItem} {
       &:not(:last-of-type){
        margin-right:${props => props.spacing ? props.spacing + 'px' : '0px'};
       }
   }
`;

export const FlexCol = styled.div`
   display:inline-flex; 
   align-items:${props => props.alignItems ? props.alignItems : 'flex-start'};
   justify-content:${props => props.justifyContent ? props.justifyContent : 'start'};
   width:${props => props.block ? '100%' : 'auto'};
   flex-direction:column;
   & > ${FlexItem} {
        &:not(:last-of-type){
            margin-bottom:${props => props.spacing ? props.spacing + 'px' : '0px'};
        }
   }
`

