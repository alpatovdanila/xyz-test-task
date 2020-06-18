//@flow
import * as React from 'react';
import styles from './app.module.scss';
import {SearchPage} from '../search-page';
import {IndexPage} from '../index-page';
import {Header} from "../header";
import {Switch, Route, Redirect} from "react-router-dom";
import {FlexItem, Flex} from "../../ui/layout";
import {storeContext} from "../../model";
import {setOrder, setQuery, setPage, setSort} from "../../model/search";
import {useSearchUrl} from "../../routing/useSearchUrl";


export const App = () => {
    const {query, order, sort, page} = useSearchUrl();
    const {dispatch} = React.useContext(storeContext);

    // "Connect" store to router
    React.useEffect(() => {
        dispatch(setQuery(query));
        dispatch(setOrder(order));
        dispatch(setSort(sort));
        dispatch(setPage(page));
    }, [query, order, sort, page]);

    return (
        <div className={styles.appWrapper}>
            <Flex col spacing={32} block>
                <FlexItem block>
                    <Header/>
                </FlexItem>
                <FlexItem>
                    <Switch>
                        <Route path={"/"} exact component={IndexPage}/>
                        <Route path={"/search/"} exact component={SearchPage}/>
                        <Route exact render={() => <Redirect to={"/"}/>}/>
                    </Switch>
                </FlexItem>
            </Flex>
        </div>
    );
}






