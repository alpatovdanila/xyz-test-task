import * as React from 'react';
import styles from './layout.module.scss';
import cn from 'class-names'


export const FlexItem = ({block = false, children, col, ...props}) => {
    const classNames = cn(styles.flexItem, {[styles.itemBlock]: block, [styles[`col${col}`]]: col});
    return <div {...props} className={classNames}>{children}</div>;
}

export const Flex = ({children, spacing = 0, wrap = false, col = false, alignCenter = false, valignCenter = false, block = false}) => {
    const classNames = cn({
        [styles[`spacing${spacing}`]]: !!spacing,
        [styles.flex]: !col,
        [styles.wrap]: wrap,
        [styles.flexCol]: col,
        [styles.alignCenter]: alignCenter,
        [styles.valignCenter]: valignCenter,
        [styles.block]: block
    })
    return <div className={classNames}>{children}</div>
}
