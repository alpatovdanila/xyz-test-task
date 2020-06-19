import * as React from 'react';
import {Flex, FlexItem} from "../../../ui/layout";
import {Jello} from "../../../ui/jello";
import {Logo} from "../../../ui/logo";
import {SearchForm} from "../../search/components/search-form";

import {useGetParams} from "../../../lib/useGetParams";
import {useContext} from "react";
import {storeContext} from "../../../store";
import {useHistory} from "react-router";


export const Header = () => {
    const [{query, lang}, update] = useGetParams({query:'', lang:null});
    const {state:{search, languages}} = useContext(storeContext);

    const handleSearchFormSubmit = ({query, lang}) => update({query, lang, page:1}, '/search/');

    return (
        <Flex col block alignCenter spacing={32}>
            <FlexItem>
                {search.fetching && <Jello><Logo/></Jello>}
                {!search.fetching && <Logo/>}
            </FlexItem>
            <FlexItem block>
                <SearchForm
                    query={query}
                    onSubmit={handleSearchFormSubmit}
                    submitTimeout={500}
                    languages={languages}
                    activeLanguage={lang}
                />
            </FlexItem>
        </Flex>
    )
}