import * as React from 'react';
import {SortSelect} from "../../features/search/components/sort-select";
import {ReposList} from "../../features/search/components/repos-list";
import {FlexItem, Flex} from "../../ui/layout";

import {storeContext} from "../../store";
import {getTotalPages} from "../../features/search/ducks/search";
import {FadedAway} from "../../ui/faded-away";
import {Paginator} from "../../ui/paginator";
import {useGetParams} from "../../lib/useGetParams";

import {SearchResultsMeta} from "../../features/search/components/search-results-meta";
import {useSearchPage} from "./useSearchPage";

export const SearchPage = () => {

    useSearchPage();

    const {state: {search, search: {results, fetching, page, sort, order}}} = React.useContext(storeContext);
    const totalPages = getTotalPages(search);
    const [_, update] = useGetParams();

    const handleSortChange = sort => update({sort});
    const handlePageChange = page => update({page});
    const handleOrderChange = order => update({order});

    return (
        <Flex col spacing={32} block alignCenter>
            {results && results.items && (
                <FlexItem block>
                    <Flex block>
                        <FlexItem col={4}>
                            <SearchResultsMeta searchState={search}/>
                        </FlexItem>
                        <FlexItem style={{textAlign: `right`}} col={8}>
                            <SortSelect
                                sort={sort}
                                order={order}
                                onSortSelect={handleSortChange}
                                onOrderSelect={handleOrderChange}
                            />
                        </FlexItem>
                    </Flex>
                </FlexItem>
            )}

            <FlexItem block>
                {!!results.items && (<>
                        {fetching && <FadedAway><ReposList items={results.items}/></FadedAway>}
                        {!fetching && <ReposList items={results.items}/>}
                    </>
                )}
            </FlexItem>
            {totalPages > 1 && (
                <FlexItem block>
                    <Paginator pagesCount={totalPages} onPageClick={handlePageChange} currentPage={page}/>
                </FlexItem>
            )}
        </Flex>
    );
}


