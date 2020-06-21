//@flow

import * as React from 'react';
import styles from './select.module.scss';
import cn from 'classnames';

type Props = {
    transparent?: boolean,
    block?: boolean,
    ...
}

// <any> is bad there?
export const Select = React.forwardRef<Props, any>(({transparent = false, block = false, ...props}: Props, ref) => {

    const classNames = cn(styles.select, {
        [styles.block]: block,
        [styles.transparent]: transparent
    });
    return <select {...props} ref={ref} type="text" className={classNames}/>
})
