// @flow
import * as React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Index} from "./pages";
import {Search} from "./pages/search";
import {useGetParams} from "./lib/useGetParams";

const titleElement = document.querySelector('title')

const usePageTitleEffect = () => {
    const [{query}] = useGetParams({query:null});
    React.useEffect(()=>{
        const title = query ? `${query} — Github Repositories Search` : `Github Repositories Search`;
        if(titleElement) titleElement.innerText = title;
    }, [query])
}


export const Routes = () => {
    usePageTitleEffect();
    return <Switch>
        <Route path={"/"} exact component={Index}/>
        <Route path={"/search/"} component={Search}/>
        <Route exact render={() => <Redirect to={"/"}/>}/>
    </Switch>
}