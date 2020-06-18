import * as React from 'react';
import {SortSelect} from "../components/sort-select";
import {ReposList} from "../components/repos-list";
import {FlexItem, Flex} from "../ui/layout";
import {useContext, useEffect} from "react";
import {storeContext} from "../model";
import {invalidate} from "../model/search";
import {FadedAway} from "../ui/faded-away";
import {Paginator} from "../ui/paginator";
import {useSearchUrl} from "../routing/useSearchUrl";
import {useHistory} from "react-router";
import {LanguageSelect} from "../components/language-select";

export const SearchPage = () => {
    const {updateUrl, query:urlQuery} = useSearchUrl();
    const history = useHistory();
    const {state, dispatch} = useContext(storeContext);
    const {search:{page, sort, order, query, fetching, results, perPage, lang}} = state;

    const handleLanguageChange = language => {
        updateUrl({lang:language.name});
    }
    const handleSortChange = sort=> updateUrl({sort});
    const handlePageChange = page => updateUrl({page});
    const handleOrderChange = order => updateUrl({order});

    /*  Redirect to index when no query
        Now we can only use url because state fills with these parameters
        asynchronously (setState/useReducer) when router renders page
        immediately when url query changed
        Todo: find a way to check from state or move to router-level
     */
    useEffect(()=>{
        if(!urlQuery) history.replace('/');
    }, [urlQuery])

    // Refetch results when query changes
    useEffect(() => {
        dispatch(invalidate());
    }, [query, order, page, sort, lang]);

    const totalResults = !!results.total_count ? Math.min(results.total_count, 1000) : 0;// Github's limitation is 1000 search results max
    const totalPages = Math.ceil(totalResults/perPage);

    return (
        <Flex col spacing={32} block alignCenter>
            <FlexItem>
                <LanguageSelect languages={state.languages} activeLanguage={lang} onLanguageSelect={handleLanguageChange}/>
            </FlexItem>
            <FlexItem>
                <SortSelect sort={sort} onSortSelect={handleSortChange} order={order} onOrderSelect={handleOrderChange}/>
            </FlexItem>
            <FlexItem block>
                {!!results.items && (<>
                        {fetching && <FadedAway><ReposList items={results.items}/></FadedAway>}
                        {!fetching && <ReposList items={results.items}/>}
                    </>
                )}
            </FlexItem>
            {!!totalPages && (
                <FlexItem block>
                    <Paginator pagesCount={totalPages} onPageClick={handlePageChange} currentPage={page}/>
                </FlexItem>
            )}
        </Flex>
    );
}



