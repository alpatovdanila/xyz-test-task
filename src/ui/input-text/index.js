
import * as React from 'react';
import styles from './input-text.module.scss';
import cn from 'classnames';

type Props = {transparent:boolean, block:boolean, ...}

export const InputText = React.forwardRef(({transparent= false, block = false, ...props}: Props, ref) => {

    const classNames = cn(styles.input, {
        [styles.block]:block,
        [styles.transparent]:transparent
    });


    return <input {...props} ref={ref} type="text" className={classNames}/>
})






