//@flow
import * as React from 'react';
import {Repository} from "../../ui/repository";
import styles from './repos-list.module.scss'
import {Flex} from "../../ui/layout";
import {Empty} from "../../ui/empty";
import {H1} from "../../ui/heading";
import type {RepositoryType} from "../../store/types/repository";

type Props = {
 items:Array<RepositoryType>
}

export const ReposList = ({items} : Props) => (
    <Flex col block spacing={24} >
        {!!items.length && items.map(item => (
            <div className={styles.reposListItem} key={item.id}>
                <Repository repository={item}/>
            </div>
        ))}
        {!items.length && <Empty><H1>Nothing found</H1></Empty>}
    </Flex>
)
