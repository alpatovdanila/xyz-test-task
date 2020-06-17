import * as React from "react";
import {ReactComponent as SearchSvg} from './search.svg';
import {ReactComponent as StarOutlineSvg} from './star_outline.svg';
import {ReactComponent as ForkSvg} from './fork.svg';
import {ReactComponent as CircleSvg} from './circle.svg';


export const asIcon = Component => ({size='18', fill = 'black', ...rest}) => (
    <Component width={size} height={size} fill={fill} className={"icon"} {...rest}/>
);

export const Search = asIcon(SearchSvg);
export const StarOutline = asIcon(StarOutlineSvg);
export const Fork = asIcon(ForkSvg);
export const Circle = asIcon(CircleSvg);




