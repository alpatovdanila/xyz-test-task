import * as React from "react";
import {Flex, FlexItem} from "../ui/layout";
import {Link} from "react-router-dom";
import {SearchForm} from "./search-form";
import {Logo} from "../ui/logo";


export const Header = () => (
    <Flex col block alignCenter spacing={32}>
        <FlexItem>
            <Link to={"/"}><Logo/></Link>
        </FlexItem>
        <FlexItem block>
            <SearchForm submitTimeout={1000}/>
        </FlexItem>
    </Flex>
)