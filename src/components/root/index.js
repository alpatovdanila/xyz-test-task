import * as React from 'react';
import {useParams, useHistory} from 'react-router';
import {SearchForm} from '../search-form';
import {SortSelect} from "../sort-select";
import {useGithubEndpoint} from '../../api/useGithubEndpoint';
import {searchRepositories} from '../../api/endpoints';
import {ORDER_DESC, SORT_BEST_MATCH} from "../../api/constants";

export const Root = () => {
    const params = useParams();
    const history = useHistory();
    const [searchQuery, setSearchQuery] = React.useState(params.query);
    const [sort, setSort] = React.useState(params.sort || SORT_BEST_MATCH);
    const [order, setOrder] = React.useState(params.order || ORDER_DESC);

    const {data, fetching, error} = useGithubEndpoint(searchRepositories(searchQuery, sort, order));

    React.useEffect(() => {
        const url = `/${searchQuery}${sort ? `/sort=${sort}` : ``}${order ? `/order=${order}`:``}`;
        history.push(url);
    }, [sort, order, searchQuery]);

    return <>
        <SearchForm onSubmit={setSearchQuery} initialQuery={searchQuery} submitTimeout={1000}/>
        <SortSelect sort={sort} order={order} onSortSelect={setSort} onOrderSelect={setOrder}/>
        {fetching ? 'fetching...' : JSON.stringify({searchQuery, data})}
    </>
}