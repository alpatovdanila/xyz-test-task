//@flow
import * as React from 'react';
import styles from './link.module.scss';

export const Link = ({children, ...props}) => <a {...props} className={styles.link}>{children}</a>