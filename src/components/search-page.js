import * as React from 'react';
import {SortSelect} from "./sort-select";
import {ReposList} from "./repos-list";
import {FlexItem, Flex} from "../ui/layout";

import {useContext, useEffect} from "react";
import {storeContext} from "../model";
import {invalidate} from "../model/search";

export const SearchPage = () => {
    const {state, dispatch} = useContext(storeContext);
    const {search:{query, order, page, sort, results, fetching}} = state;

    useEffect(()=>{
        dispatch(invalidate());
    }, [query, order, page, sort])

    return (
        <Flex col spacing={32} block>
            <FlexItem>
               <SortSelect/>
            </FlexItem>

            <FlexItem>
                {!!results && <ReposList items={results.items}/>}
            </FlexItem>
        </Flex>
    );
}



