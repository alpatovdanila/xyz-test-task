import * as React from 'react';
import { useParams, useLocation, useHistory } from 'react-router';
import { SearchForm } from '../search-form';

import { useEndpoint } from '../../api/useEndpoint';
import { search as searchRepositoriesEndpoint, SORT_STARS, ORDER_ASC, ORDER_DESC, SORT_FORKS, SORT_BEST_MATCH } from '../../api/endpoints/repositories';

export const Shell = () => {
    const params = useParams();
    const history = useHistory();
    const [searchQuery, setSearchQuery] = React.useState(params.query);
    const [sort, setSort] = React.useState(params.sort || SORT_STARS);
    const [order, setOrder] = React.useState(params.order || ORDER_ASC);

    const { data, fetching, error, timestamp } = useEndpoint(searchRepositoriesEndpoint(searchQuery, sort, order));

    React.useEffect(() => history.push(`/${searchQuery}/sort=${sort}/order=${order}`), [timestamp])

    return <>
        {!!error && JSON.stringify(error)}
        <button onClick={() => setSort(SORT_STARS)}>{sort === SORT_STARS ? <b>STARS</b> : 'STARS'}</button>
        <button onClick={() => setSort(SORT_FORKS)}>{sort === SORT_FORKS ? <b>FORKS</b> : 'FORKS'}</button>
        <button onClick={() => setSort(SORT_BEST_MATCH)}>{sort === SORT_BEST_MATCH ? <b>BEST</b> : 'BEST'}</button>
        <SearchForm onSubmit={setSearchQuery} initialQuery={searchQuery} submitTimeout={1000} />
        {fetching ? 'fetching...' : JSON.stringify({ searchQuery, data })}
    </>
}