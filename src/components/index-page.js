//@flow
import * as React from 'react';
import {useHistory} from 'react-router-dom';
import {constructRoutePath} from '../lib/constructRoutePath';
import {SearchForm} from './search-form';

export const IndexPage = () => {
    const history = useHistory();
    const setSearchQuery = (query) => history.push(constructRoutePath({query}));
    return <SearchForm onSubmit={setSearchQuery} submitTimeout={500}/>
}