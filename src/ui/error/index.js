//@flow
import * as React from 'react';
import styles from './error.module.scss';

export const Error = ({children, props}) => <div className={styles.error} {...props}>{children}</div>


