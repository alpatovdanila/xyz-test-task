import * as React from 'react';
import {Redirect, Route, Switch, Match} from "react-router-dom";
import {Index} from "./pages";
import {Search} from "./pages/search";
import {useGetParams} from "./lib/useGetParams";

const usePageTitleEffect = () => {
    const {query} = useGetParams();
    const title = query ? `${query} — Github Repositories Search` : `Github Repositories Search`
    document.querySelector('title').innerText = title;
}


export const Routes = () => {
    usePageTitleEffect();
    return <Switch>
        <Route path={"/"} exact component={Index}/>
        <Route path={"/search/"} component={Search}/>
        <Route exact render={() => <Redirect to={"/"}/>}/>
    </Switch>
}