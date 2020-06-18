// @flow
import * as React from 'react';
import styles from './input-text.module.scss';
import cn from 'class-names';


export const InputText = React.forwardRef(({transparent= false, block = false, ...props}, ref) => {

    const classNames = cn(styles.input, {
        [styles.block]:block,
        [styles.transparent]:transparent
    });


    return <input {...props} ref={ref} type="text" className={classNames}/>
})






