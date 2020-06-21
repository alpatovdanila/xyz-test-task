// @flow
import * as React from 'react';
import styles from './layout.module.scss';
import cn from 'classnames'

type Spacings = 2 | 4 | 8 | 16 | 20 | 24 | 28 | 32 | 48
type Size = 1 | 23 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type ItemProps = {
    block?: boolean,
    children: React.Node,
    col?: Size,
    ...
}

type Props = {
    block?: boolean,
    alignCenter?: boolean,
    valignCenter?: boolean,
    col?: boolean,
    children: React.Node,
    spacing?: Spacings,
    wrap?: boolean,
    ...
}

export const FlexItem = ({block = false, children, col = false, ...props}: ItemProps) => {
    const classNames = cn(styles.flexItem, {[styles.itemBlock]: block, [styles[`col${col}`]]: col});
    return <div {...props} className={classNames}>{children}</div>;
}

export const Flex = ({children, spacing = 0, wrap = false, col = false, alignCenter = null, valignCenter = false, block = false}: Props) => {
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
