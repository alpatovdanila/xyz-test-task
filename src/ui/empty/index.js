//@flow
import * as React from 'react';
import styles from './empty.module.scss'

export const Empty = ({children, ...props}) => <div className={styles.empty} {...props}>{children}</div>
