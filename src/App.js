//@flow

import * as React from 'react';
import styled,  {type StyledComponent} from 'styled-components';
import {Route} from 'react-router-dom';
import {SearchPage} from './components/search-page';
import { IndexPage } from './components/index-page';


export const  App = () => {
    return (
        <AppWrapper>
            <Route path={"/"} exact component={IndexPage}/>
            <Route path={"/:query"} component={SearchPage}/>
        </AppWrapper>
    );
}


const AppWrapper: StyledComponent<{}, empty, HTMLDivElement> = styled.div`
    width:100%;
    max-width:700px;
    margin:0 auto;
`




