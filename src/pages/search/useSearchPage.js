// @flow
import {useHistory} from "react-router";
import {useGetParams} from "../../lib/useGetParams";
import * as React from "react";
import {storeContext} from "../../store";
import {
    invalidate,
    ORDER_DESC,
    setLang,
    setOrder,
    setPage,
    setQuery,
    setSort,
    SORT_BEST_MATCH
} from "../../store/ducks/search";
import appConfig from '../../config';


export const useSearchPage = () => {
    const history = useHistory();

    const [{query, order, page, sort, lang}] = useGetParams({
        query: '',
        order: ORDER_DESC,
        page: null,
        sort: SORT_BEST_MATCH,
        lang: '',
    });

    if (!query) history.push(appConfig.appUrl);

    const {state: {search}, dispatch} = React.useContext(storeContext);

    React.useEffect(() => {
        dispatch(setQuery(query));
        dispatch(setOrder(order));
        dispatch(setPage(page));
        dispatch(setSort(sort));
        dispatch(setLang(lang));
    }, [query, order, page, sort, lang]);

    React.useEffect(() => {
        if (search.query) dispatch(invalidate());
    }, [search.query, search.order, search.page, search.sort, search.lang]);

}