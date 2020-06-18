import * as React from "react";
import styles from './text-label.module.scss';

export const TextLabel = ({children, ...props}) => <span {...props} className={styles.textLabel}>{children}</span>

