//@flow
import * as React from 'react';
import styles from './faded-away.module.scss'

export const FadedAway = ({children, ...props}) => <div className={styles.fadedAway} {...props}>{children}</div>
