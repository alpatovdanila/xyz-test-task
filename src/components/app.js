//@flow
import * as React from 'react';
import styled, {type StyledComponent} from 'styled-components';
import {Route, Redirect, Switch} from 'react-router-dom';
import {SearchPage} from './search-page';
import {IndexPage} from './index-page';
import {Header} from "./header";
import {useGithubEndpoint} from "../api/useGithubEndpoint";
import {languagesListEndpoint} from "../api/endpoints/languages";
import {emojisListEndpoint} from "../api/endpoints/emojis";
import {Preloader} from "../ui/preloader/preloader";
import {Error} from "../ui/error";
import {FlexItem, FlexCol} from "../ui/layout";
import {useStore} from "../store";


export const App = () => {
    const store = useStore();


    //if(appCrashed) return <Preloader><Error>Directories fetch failed<br/>Languages: {languages.error}<br/>Emojis: {emojis.error}</Error></Preloader>
    //if(!appReady) return <Preloader>Fetching github directories, please wait</Preloader>
    return (
        <AppWrapper>
            {JSON.stringify(store)}
            <button onClick={()=>store.search.fetch()}>Toggle fetching</button>
            <FlexCol spacing={32} block alignItems={"stretch"}>
                <FlexItem>
                    <Header/>
                </FlexItem>
                <FlexItem>
                    <Switch>
                        <Route path={"/"} exact component={IndexPage}/>
                        <Route path={"/search/"} exact component={SearchPage}/>
                        <Route exact render={() => <Redirect to={"/"}/>}/>
                    </Switch>
                </FlexItem>
            </FlexCol>
        </AppWrapper>
    );
}

const AppWrapper: StyledComponent<{}, empty, HTMLDivElement> = styled.div`
    width:100%;
    max-width:900px;
    margin:0 auto;
    padding:64px 0;
`




