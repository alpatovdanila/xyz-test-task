import {FlexItem} from "../../../ui/layout";
import * as React from "react";

export const SearchResultsMeta = ({searchState}) => {
    const {results, perPage} = searchState;
    const totalResults = !!results.total_count ? Math.min(results.total_count, 1000) : 0;// Github's limitation is 1000 search results max
    const totalPages = Math.ceil(totalResults / perPage);
    const hasResults = !!results && !!results.items && !!results.items.length;
    const resultsShown = Math.min(perPage, results.total_count)

    return <>Showing {resultsShown} of {results.total_count} results</>
}