//@flow
import * as React from 'react';
import {useHistory, useLocation} from 'react-router';
import {constructSearchRoutePath} from './constructSearchRoutePath';

export const useSearchUrl = () => {
    const location = useLocation();
    const history = useHistory();

    const params = React.useMemo(() => {
        const params = new URLSearchParams(location.search);
        return {
            query: params.get('query') || null,
            sort: params.get('sort') || null,
            order: params.get('order') || null,
            page: isNaN(+params.get('page')) ? 1 : +params.get('page'),
            lang: params.get('lang') || null,
        }
    }, [location.search]);

    const updateUrl = React.useCallback(({query = params.query, sort = params.sort, order = params.order, page = params.page, lang = params.lang}) => {
        history.push(constructSearchRoutePath({query, sort, order, page, lang}))
    }, [location.search])


    return {
        query: params.query,
        order: params.order,
        page: params.page,
        sort: params.sort,
        lang: params.lang,
        updateUrl
    }
}