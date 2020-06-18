//@flow
import * as React from 'react';
import {useHistory, useLocation} from 'react-router';
import { constructSearchRoutePath } from './constructSearchRoutePath';
import {constructPageTitle} from "./constructPageTitle";

export const useSearchUrl = () => {
    const location = useLocation();
    const history = useHistory();

    const params = React.useMemo(()=>{
        const params = new URLSearchParams(location.search);
        return {
            query:params.get('query') || null,
            sort: params.get('sort') || null,
            order: params.get('order') || null,
            page: isNaN(+params.get('page')) ?  1 : +params.get('page'),
        }
    }, [location.search]);

    const {query, order, page, sort} = params;

    const setOrder = newOrder => history.push(constructSearchRoutePath({query, sort, order:newOrder, page}));

    const setSort = newSort => history.push(constructSearchRoutePath({query, sort:newSort, order, page}));

    const setQuery = newQuery => history.push(constructSearchRoutePath({query:newQuery, sort, order, page}));

    const setPage = newPage => history.push(constructSearchRoutePath({query, sort, order, page:newPage}));

    React.useEffect(()=>{
        document.querySelector('title').innerText = constructPageTitle(query);
    }, [location.search])

    return {
        query,
        order,
        page,
        sort,
        setSort,
        setQuery,
        setPage,
        setOrder
    }
}