//@flow
import * as React from 'react';
import styles from './app.module.scss';
import {storeContext} from "./store/";
import {preload} from "./store/ducks/application";
import {Preloader} from "./ui/preloader";
import {FlexItem, Flex} from "./ui/layout";
import {Header} from "./components/common/header";
import {Routes} from "./routes";
import {Error} from "./ui/error";
import {Footer} from "./components/common/footer";


export const App = () => {
    const {state, state: {application}, dispatch} = React.useContext(storeContext);

    React.useEffect(() => dispatch(preload()), []);

    if (application.preloading) return <Preloader>Preloading github directories</Preloader>;

    return (
        <div className={styles.appWrapper}>
            <Flex col spacing={32} block>
                <FlexItem block><Header/></FlexItem>
                {!!application.errors.length && (
                    <FlexItem>
                        {application.errors.map(error => <Error>{error.message}</Error>)}
                    </FlexItem>
                )}
                <FlexItem>
                <Routes/>
            </FlexItem>
                <FlexItem>
                    <Footer/>
                </FlexItem>
            </Flex>
        </div>
    );
}






