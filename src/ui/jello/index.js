import * as React from "react";
import styles from './jello.module.scss';
import cn from 'class-names';

export const Jello = ({infinite, children, ...props}) => {
    const classNames = cn(styles.jello, {[styles.infinite]:infinite});
    return <div {...props}  className={classNames}>{children}</div>
}



