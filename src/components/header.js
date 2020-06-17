import * as React from "react";
import {useSearchUrl} from "../routing/useSearchUrl";
import {FlexCol, FlexItem} from "../ui/layout";
import {Link} from "react-router-dom";
import {SearchForm} from "./search-form";
import {Logo} from "../ui/logo";


export const Header = () => {

    return <FlexCol block alignItems={"center"} spacing={32}>
        <FlexItem><Link to={"/"}><Logo/></Link></FlexItem>
        <FlexItem block><SearchForm submitTimeout={1000}/></FlexItem>
    </FlexCol>
}