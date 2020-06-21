// @flow
import * as React from "react";
import {Link} from "../link";
import styles from './repository.module.scss';
import {StarsCount} from "../stars-count";
import {ForksCount} from "../forks-count";
import {Language} from "../language";
import {Flex, FlexItem} from "../layout";
import type {Repository as TRepository} from "../../store/types/repository";



export const Repository = ({repository}:TRepository) => {
    const {html_url, full_name, description, language, stargazers_count, forks_count} = repository;
    return <div className={styles.repository}>
        <Flex col spacing={16}>
            <FlexItem>
                <div className={styles.url}><Link target="_blank" rel="noopener noreferrer" href={html_url}>{full_name}</Link></div>
            </FlexItem>

            {repository.description && (
                <FlexItem>
                    {/*Setting dangerously for the emojified description text to work*/}
                    {/*<div className={styles.description} dangerouslySetInnerHTML={{__html : description}}/>*/}
                    <div className={styles.description}>{description}</div>
                </FlexItem>
            )}

            <FlexItem>
                <Flex spacing={16} valignCenter>
                    {language && <FlexItem><Language language={language}/></FlexItem>}
                    <FlexItem><StarsCount stars={stargazers_count}/></FlexItem>
                    <FlexItem><ForksCount forks={forks_count}/></FlexItem>
                </Flex>
            </FlexItem>
        </Flex>
    </div>

}

