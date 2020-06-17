//@flow
import * as React from 'react';
import {type Repository as RepositoryType} from '../api/endpoints/repositories';
import {Repository} from "../ui/repository";
import styled from 'styled-components';
import {FlexItem, FlexCol} from "../ui/layout";

type Props = {
    resultTimestamp: number,
    items?: Array<RepositoryType>
}

export const ReposList = ({items} : Props) => {
    return <FlexCol spacing={24}>
        {items && items.map(item => (
            <ReposListItem key={item.id}>
                <Repository repository={item}/>
            </ReposListItem>
        ))}
    </FlexCol>
}

const ReposListItem = styled(FlexItem)`
    &:not(:last-child){
        border-bottom:1px solid ${props => props.theme.colors.gray5};
        padding-bottom:24px;
    }
`


