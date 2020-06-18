import * as React from "react";
import styles from './preloader.module.scss';
import {Logo} from "../logo";
import {Flex, FlexItem} from "../layout";
import {Jello} from "../jello";



export const Preloader = ({children}) => <div className={styles.preloader}>
    <Flex col spacing={32} valignCenter>
        <FlexItem><Jello infinite><Logo/></Jello></FlexItem>
        <FlexItem>{children}</FlexItem>
    </Flex>
</div>