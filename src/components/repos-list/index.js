//@flow
import * as React from 'react';
import {Repository} from "../../ui/repository";
import styles from './repos-list.module.scss'
import {Flex} from "../../ui/layout";

export const ReposList = ({items}) => {
    return <Flex col spacing={24}>
        {items && items.map(item => (
            <div className={styles.reposListItem} key={item.id}>
                <Repository repository={item}/>
            </div>
        ))}
    </Flex>
}




