
import * as React from 'react';
import styles from "./list-item.module.scss";

export const ListItem = ({children, ...props}) => <div {...props} className={styles.listItem}>{children}</div>