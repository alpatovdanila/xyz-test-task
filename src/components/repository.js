import * as React from "react";
import {type Repository as RepositoryType} from "../api/endpoints/repositories";
import {Link} from "../ui/link";
import styled from 'styled-components';
type Props = {
    repository: RepositoryType,
}

export const Repository = ({repository}: Props) => {
    return <Container>
        <Link href={repository.url}>{repository.full_name}</Link>
        <p>{repository.description}</p>

    </Container>

}

const Container = styled.div`
    border:1px solid gray;
    padding:16px;
    display:block;
    
`;