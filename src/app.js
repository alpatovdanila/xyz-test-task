//@flow
import * as React from 'react';
import styles from './app.module.scss';

import {usePageTitleEffect} from "./routing/usePageTitleEffect";
import {storeContext} from "./store/";
import {preload} from "./features/common/ducks/application";

import {Preloader} from "./ui/preloader";
import {FlexItem, Flex} from "./ui/layout";
import {Header} from "./features/common/components/header";
import {Routes} from "./routing/routes";
import {Error} from "./ui/error";


export const App = () => {
    const {state:{application}, dispatch} = React.useContext(storeContext);
    usePageTitleEffect();
    React.useEffect(() => dispatch(preload()), []);

    if(application.preloading) return <Preloader>Preloading github directories</Preloader>

    return (
        <div className={styles.appWrapper}>
            <Flex col spacing={32} block>
                <FlexItem block><Header/></FlexItem>
                {!!application.errors.length && (
                    <FlexItem>
                        {application.errors.map(error => <Error>{error}</Error>)}
                    </FlexItem>
                )}
                <FlexItem><Routes/></FlexItem>

            </Flex>
        </div>
    );
}






