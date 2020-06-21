// @flow
import * as React from "react";
import styles from './jello.module.scss';
import cn from 'classnames';

type Props = {infinite?:boolean, children: React.Node, ...}

export const Jello = ({infinite = false, children, ...props}: Props) => {
    const classNames = cn(styles.jello, {[styles.infinite]:infinite});
    return <div {...props}  className={classNames}>{children}</div>
}



