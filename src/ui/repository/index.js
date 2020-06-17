import * as React from "react";
import {type Repository as RepositoryType} from "../../api/endpoints/repositories";
import {Link} from "../link";
import styled from 'styled-components';
import {StarsCount} from "../stars-count";
import {ForksCount} from "../forks-count";
import {Language} from "../language";
import {Flex, FlexItem, FlexCol} from "../layout";

type Props = {
    repository: RepositoryType,
    invalidated:boolean,
}

export const Repository = ({repository, invalidated = false}: Props) => {
    return <Container>
        <FlexCol spacing={12}>
            <FlexItem>
                <Url><Link target="_blank" rel="noopener noreferrer" href={repository.html_url}>{repository.full_name}</Link></Url>
            </FlexItem>

            {repository.description && (
                <FlexItem>
                    <Description>{repository.description}</Description>
                </FlexItem>
            )}

            <FlexItem>
                <Flex spacing={12} alignItems={"center"}>
                    <FlexItem><Language language={repository.language}/></FlexItem>
                    <FlexItem><StarsCount stars={repository.stargazers_count}/></FlexItem>
                    <FlexItem><ForksCount forks={repository.forks_count}/></FlexItem>
                </Flex>
            </FlexItem>
        </FlexCol>
    </Container>

}

const Container = styled.div`
    display:block;
`;

const Url = styled.div`
    font-size:32px;
    color:${props => props.theme.colors.gray};
`;

const Description = styled.p`
    line-height:146%;
    font-size:14px;
    margin:0;
    padding:0;
    max-width:800px;
`
