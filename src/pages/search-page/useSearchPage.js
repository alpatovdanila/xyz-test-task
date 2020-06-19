import {useHistory} from "react-router";
import {useGetParams} from "../../lib/useGetParams";
import * as React from "react";
import {storeContext} from "../../store";
import {invalidate, setLang, setOrder, setPage, setQuery, setSort} from "../../features/search/ducks/search";


export const useSearchPage = () => {
    const history = useHistory();

    const [{query, order, page, sort, lang}, update] = useGetParams({
        query: '',
        order: null, page: null, sort: null, lang: '',
    });

    if (!query) history.push('/');

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