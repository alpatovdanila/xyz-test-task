//@flow
import * as React from 'react';
import {type SearchEndpoint} from '../api/endpoints/repositories';
import {Repository} from "./repository";

type Props = {
    resultTimestamp: number,
    result?: SearchEndpoint
}

export const ReposList = ({result} : Props) => {
    
    return <>
        {result && result.items && result.items.map(item => <Repository repository={item} key={item.id}/>)}
    </>
}
