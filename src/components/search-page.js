//@flow
import * as React from 'react';
import {useParams, useHistory, useLocation} from 'react-router';
import { constructRoutePath } from '../lib/constructRoutePath';
import { SearchForm } from './search-form';
import { ReposList } from './repos-list';
import { SortSelect } from "./sort-select";
import { useGithubEndpoint } from '../api/useGithubEndpoint';
import { search as searchRepositories, sorts, type SearchEndpoint} from '../api/endpoints/repositories';
import {orders} from '../api/constants';



export const SearchPage = () => {
    const history = useHistory();
    const location = useLocation());


    const queryParams = React.useMemo(()=>{
        return new URLSearchParams(params.query);
    }, params.query)

    const [searchQuery, setSearchQuery] = React.useState(params.query || '');
    const [sort, setSort] = React.useState(queryParams.sort || sorts.SORT_BEST_MATCH);
    const [page, setPage] = React.useState(queryParams.page || 1);
    const [order, setOrder] = React.useState(queryParams.order || orders.ORDER_DESC);



    const { data, fetching, error, timestamp } = useGithubEndpoint<SearchEndpoint>(searchRepositories(searchQuery, sort, order));

    React.useEffect(() => {
        history.push(constructRoutePath({query:searchQuery, sort, order, page}));
    }, [sort, order, searchQuery, page]);

    return (
        <>
            {JSON.stringify({sort, order, searchQuery, page, params})}
            <SearchForm onSubmit={setSearchQuery} initialQuery={searchQuery} submitTimeout={1000} />
            <SortSelect sort={sort} order={order} onSortSelect={setSort} onOrderSelect={setOrder} />
            {fetching && 'fetching'}
            {!fetching && <ReposList resultTimestamp={timestamp} result={data}/>}
        </>
    );

}

