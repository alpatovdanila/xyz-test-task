import * as React from 'react';
import styles from './error.module.scss';

export const Error = ({children, ...props}) => <div {...props} className={styles.error}>{children}</div>


