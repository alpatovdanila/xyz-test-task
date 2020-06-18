//@flow
import * as React from 'react';
import styles from './select.module.scss';
import cn from "class-names";

export const Select = React.forwardRef(({transparent= false, block = false, ...props}, ref) => {

    const classNames = cn(styles.select, {
        [styles.block]:block,
        [styles.transparent]:transparent
    });


    return <select {...props} ref={ref} type="text" className={classNames}/>
})
