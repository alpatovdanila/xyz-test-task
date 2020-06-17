//@flow
import * as React from 'react';
import {ReposList} from './repos-list';
import {SortSelect} from "./sort-select";
import {useGithubEndpoint} from '../api/useGithubEndpoint';
import {repositoriesSearchEndpoint as searchRepositories, type SearchEndpoint} from '../api/endpoints/repositories';
import {useSearchUrl} from "../routing/useSearchUrl";
import {RateLimitDisplay} from "./rate-limit-display";

import {Row, FlexItem, FlexCol, Col} from "../ui/layout";
import {Error} from "../ui/error";
import {TextLabel} from "../ui/text-label";

export const SearchPage = () => {
    const {query, sort, order, page, setOrder, setSort} = useSearchUrl();
    const {data, fetching, error, timestamp, rateLimit} = useGithubEndpoint<SearchEndpoint>(searchRepositories(query, sort, order));
    return (
        <FlexCol spacing={32} block>
            <FlexItem>
                <Row>
                    <Col>
                        {rateLimit && (
                            <TextLabel>
                                <RateLimitDisplay limit={rateLimit}/>
                            </TextLabel>
                        )}
                    </Col>
                    <Col>
                        <SortSelect sort={sort} order={order} onSortSelect={setSort} onOrderSelect={setOrder}/>
                    </Col>
                </Row>
            </FlexItem>
            {!!error && <FlexItem>
                <Error>{error}</Error>
            </FlexItem>}
            <FlexItem>
                {!!data && <ReposList resultTimestamp={timestamp} items={data.items}/>}
            </FlexItem>


        </FlexCol>
    );
}



