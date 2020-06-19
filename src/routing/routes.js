import * as React from 'react';
import {Redirect, Route, Switch, Match} from "react-router-dom";
import {IndexPage} from "../pages/index-page";
import {SearchPage} from "../pages/search-page/search-page";


export const Routes = () => (<Switch>
        <Route path={"/"} exact component={IndexPage}/>
        <Route path={"/search/"} component={SearchPage}/>
        <Route exact render={() => <Redirect to={"/"}/>}/>
    </Switch>
)