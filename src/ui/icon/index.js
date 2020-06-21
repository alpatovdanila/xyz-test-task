// Flow was very annoying about import ReactComponents as *
import * as React from "react";
import styles from './icon.module.scss'

import {ReactComponent as SearchSvg} from './search.svg';
import {ReactComponent as StarOutlineSvg} from './star_outline.svg';
import {ReactComponent as ForkSvg} from './fork.svg';
import {ReactComponent as CircleSvg} from './circle.svg';

type Props = { size: number, fill: string, ... }

export const asIcon = Component => ({size = 18, fill = 'black', ...rest}: Props) => (
    <Component {...rest} width={String(size)} height={String(size)} fill={fill} className={styles.icon}/>
);

export const Search = asIcon(SearchSvg);
export const StarOutline = asIcon(StarOutlineSvg);
export const Fork = asIcon(ForkSvg);
export const Circle = asIcon(CircleSvg);




