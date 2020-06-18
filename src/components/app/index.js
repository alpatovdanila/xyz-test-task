//@flow
import * as React from 'react';
import styles from './app.module.scss';
import {SearchPage} from '../../pages/search-page';
import {IndexPage} from '../../pages/index-page';
import {Switch, Route, Redirect} from "react-router-dom";
import {FlexItem, Flex} from "../../ui/layout";
import {storeContext} from "../../model";
import {setOrder, setQuery, setPage, setSort, setLang} from "../../model/search";
import {useSearchUrl} from "../../routing/useSearchUrl";
import {preload} from "../../model/application";
import {Preloader} from "../../ui/preloader";
import {Error} from "../../ui/error";
import {Jello} from "../../ui/jello";
import {Logo} from "../../ui/logo";
import {SearchForm} from "../search-form";


export const App = () => {
    const {state, dispatch} = React.useContext(storeContext);
    const {query, order, sort, page, lang, updateUrl} = useSearchUrl();

    // Preload emojis and languages
    React.useEffect(() => {
        dispatch(preload());
    }, []);

    // derive query parameters from url and pass them to store
    React.useEffect(() => {
        dispatch(setQuery(query));
        dispatch(setOrder(order));
        dispatch(setSort(sort));
        dispatch(setPage(page));
        dispatch(setLang(lang))
    }, [query, order, sort, page, lang]);

    const onSearchQueryChange = query => updateUrl({query});

    return (
        <div className={styles.appWrapper}>
            {!!state.application.errors.length && state.application.errors.map(error => <Error>{error}</Error>)}
            {state.application.preloading && <Preloader>Preloading github directories</Preloader>}
            {!state.application.preloading && (
                <Flex col spacing={32} block>
                    <FlexItem block>
                        <Flex col block alignCenter spacing={32}>
                            <FlexItem>
                                {state.search.fetching && <Jello><Logo/></Jello>}
                                {!state.search.fetching && <Logo/>}
                            </FlexItem>
                            <FlexItem block>
                                <SearchForm
                                    query={state.search.query}
                                    onQueryChange={onSearchQueryChange}
                                    submitTimeout={500}/>
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                    <FlexItem>
                        <Switch>
                            <Route path={"/"} exact component={IndexPage}/>
                            <Route path={"/search/"} exact component={SearchPage}/>
                            <Route exact render={() => <Redirect to={"/"}/>}/>
                        </Switch>
                    </FlexItem>
                </Flex>
            )}
        </div>
    );
}






